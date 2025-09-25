export default {
  async fetch(request, env) {
    try {
      const fivemUrl = "https://servers-frontend.fivem.net/api/servers/single/gloy8m";

      const response = await fetch(fivemUrl, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
        }
      });

      const data = await response.json(); // Parse JSON

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: "Worker fetch failed", details: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }
}
