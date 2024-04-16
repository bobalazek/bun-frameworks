Bun.serve({
  port: 3000,
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello, World!");
    }

    return new Response("Not found", { status: 404 });
  },
});
