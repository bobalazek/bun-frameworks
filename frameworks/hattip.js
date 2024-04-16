import bunAdapter from "@hattip/adapter-bun";

const handler = (context) => {
  const { pathname } = new URL(context.request.url);
  if (pathname === "/") {
    return new Response("Hello, World!");
  }

  return new Response("Not found.", { status: 404 });
};


export default bunAdapter(handler, {
  port: 3000,
});
