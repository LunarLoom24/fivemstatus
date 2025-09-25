export default {
  async fetch(request, env) {
    try {
      const fivemUrl = "https://servers-frontend.fivem.net/api/servers/single/gloy8m";

      const response = await fetch(fivemUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
      });

      // Return response as JSON with CORS headers
      return new Response(await response.text(), {
        status: response.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Worker fetch failed" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
}
