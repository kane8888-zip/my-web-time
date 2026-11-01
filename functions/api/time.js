export async function onRequestGet() {
  const now = Date.now();

  return new Response(
    JSON.stringify({
      serverTime: now,
      iso: new Date(now).toISOString(),
      source: "cloudflare-edge",
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "no-store, no-cache, must-revalidate",
        "access-control-allow-origin": "*",
      },
    }
  );
}
