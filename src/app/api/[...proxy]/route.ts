import { type NextRequest, NextResponse } from "next/server";
import https from "https";

const agent = new https.Agent({ rejectUnauthorized: false });

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

async function handler(request: NextRequest): Promise<NextResponse> {
  const { pathname, search } = new URL(request.url);
  const upstream = `${API_BASE}${pathname}${search}`;

  const reqHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "host") {
      reqHeaders[key] = value;
    }
  });

  const body =
    request.method !== "GET" && request.method !== "HEAD"
      ? Buffer.from(await request.arrayBuffer())
      : undefined;

  return new Promise((resolve) => {
    const parsed = new URL(upstream);

    const options: https.RequestOptions = {
      hostname: parsed.hostname,
      port: parsed.port || 443,
      path: parsed.pathname + parsed.search,
      method: request.method,
      headers: reqHeaders,
      agent,
    };

    const req = https.request(options, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (chunk: Buffer) => chunks.push(chunk));
      res.on("end", () => {
        const responseBody = Buffer.concat(chunks);
        const resHeaders = new Headers();
        Object.entries(res.headers).forEach(([k, v]) => {
          if (v) resHeaders.set(k, Array.isArray(v) ? v.join(", ") : v);
        });
        resolve(
          new NextResponse(responseBody, {
            status: res.statusCode ?? 500,
            headers: resHeaders,
          })
        );
      });
    });

    req.on("error", (err) => {
      resolve(NextResponse.json({ message: err.message }, { status: 502 }));
    });

    if (body) req.write(body);
    req.end();
  });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
