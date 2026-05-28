import { NextResponse } from 'next/server';
import https from 'node:https';
import { URL } from 'node:url';

const BACKEND_BASE = 'https://etaems.arcisai.io:5000/api/version';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function requestUpstream(targetUrl, method, headers, body) {
  return new Promise((resolve, reject) => {
    const u = new URL(targetUrl);
    const req = https.request(
      {
        hostname: u.hostname,
        port: u.port || 443,
        path: `${u.pathname}${u.search}`,
        method,
        headers,
        rejectUnauthorized: false,
      },
      (res) => resolve(res),
    );
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

async function proxy(request, context) {
  const params = await context.params;
  const segments = params?.path || [];
  const search = new URL(request.url).search;
  const targetUrl = `${BACKEND_BASE}/${segments.join('/')}${search}`;

  try {
    const incomingHeaders = {
      accept: request.headers.get('accept') || '*/*',
      'user-agent': 'ArcisAI-Web-Proxy',
    };
    const body = ['GET', 'HEAD'].includes(request.method)
      ? undefined
      : Buffer.from(await request.arrayBuffer());

    const upstream = await requestUpstream(targetUrl, request.method, incomingHeaders, body);

    const outHeaders = new Headers();
    for (const key of ['content-type', 'content-disposition', 'content-length', 'cache-control']) {
      const value = upstream.headers[key];
      if (value) outHeaders.set(key, Array.isArray(value) ? value.join(', ') : String(value));
    }

    const stream = new ReadableStream({
      start(controller) {
        upstream.on('data', (chunk) => controller.enqueue(new Uint8Array(chunk)));
        upstream.on('end', () => controller.close());
        upstream.on('error', (err) => controller.error(err));
      },
    });

    return new NextResponse(stream, {
      status: upstream.statusCode || 502,
      headers: outHeaders,
    });
  } catch (err) {
    console.error('[api/version proxy] upstream request failed:', targetUrl, err);
    return NextResponse.json(
      { success: false, message: `Upstream request failed: ${err?.message || 'unknown error'}` },
      { status: 502 },
    );
  }
}

export { proxy as GET, proxy as POST };
