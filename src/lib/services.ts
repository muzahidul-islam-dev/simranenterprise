import type { ApiService } from "@/types/service";
import https from "https";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchServices(): Promise<ApiService[]> {
  try {
    const agent = new https.Agent({ rejectUnauthorized: false });
    const res = await fetch(`${API_URL}/api/services`, {
      next: { revalidate: 60 },
      // @ts-expect-error node agent
      agent,
    });
    if (!res.ok) return [];
    const data = await res.json();
    return (data.data ?? []) as ApiService[];
  } catch {
    return [];
  }
}
