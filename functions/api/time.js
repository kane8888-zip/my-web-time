// Cloudflare Pages Function
// 路由：/api/time
// 返回 Cloudflare 边缘节点的当前时间（毫秒时间戳）

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
