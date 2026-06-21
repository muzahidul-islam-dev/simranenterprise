"use client";

import { useState } from "react";

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface RequestOptions {
    headers?: Record<string, string>;
    token?: string | null;
}

interface UseHttpReturn {
    isLoading: boolean;
    error: string | null;
    get: <T>(url: string, options?: RequestOptions) => Promise<T>;
    post: <T>(url: string, body: unknown, options?: RequestOptions) => Promise<T>;
    postForm: <T>(url: string, formData: FormData, options?: RequestOptions) => Promise<T>;
    put: <T>(url: string, body: unknown, options?: RequestOptions) => Promise<T>;
    patch: <T>(url: string, body: unknown, options?: RequestOptions) => Promise<T>;
    del: <T>(url: string, options?: RequestOptions) => Promise<T>;
    clearError: () => void;
}

async function request<T>(method: HttpMethod, url: string, body: unknown, options: RequestOptions = {}): Promise<T> {
    const isFormData = body instanceof FormData;

    const headers: Record<string, string> = {
        Accept: "application/json",
        ...options.headers,
    };

    if (!isFormData) {
        headers["Content-Type"] = "application/json";
    }

    if (options.token) headers["Authorization"] = `Bearer ${options.token}`;

    const response = await fetch(url, {
        method,
        headers,
        body: body !== undefined ? (isFormData ? (body as FormData) : JSON.stringify(body)) : undefined,
    });

    const contentType = response.headers.get("Content-Type") ?? "";
    const isJson = contentType.includes("application/json");

    if (!response.ok) {
        if (isJson) {
            const data = await response.json();
            const message = data?.errors
                ? Object.values(data.errors as Record<string, string[]>).flat().join(" ")
                : data?.message ?? "Something went wrong.";
            throw new Error(message);
        }
        throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    if (!isJson) return null as T;
    return (await response.json()) as T;
}

export function useHttp(): UseHttpReturn {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function execute<T>(method: HttpMethod, url: string, body: unknown, options?: RequestOptions): Promise<T> {
        setIsLoading(true);
        setError(null);
        try {
            return await request<T>(method, url, body, options);
        } catch (err) {
            const message = err instanceof Error ? err.message : "Unknown error.";
            setError(message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    }

    return {
        isLoading,
        error,
        get: <T>(url: string, options?: RequestOptions) => execute<T>("GET", url, undefined, options),
        post: <T>(url: string, body: unknown, options?: RequestOptions) => execute<T>("POST", url, body, options),
        postForm: <T>(url: string, formData: FormData, options?: RequestOptions) => execute<T>("POST", url, formData, options),
        put: <T>(url: string, body: unknown, options?: RequestOptions) => execute<T>("PUT", url, body, options),
        patch: <T>(url: string, body: unknown, options?: RequestOptions) => execute<T>("PATCH", url, body, options),
        del: <T>(url: string, options?: RequestOptions) => execute<T>("DELETE", url, undefined, options),
        clearError: () => setError(null),
    };
}
