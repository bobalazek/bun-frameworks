import { createApp, createRouter, toWebHandler, defineEventHandler } from "h3";
import wsAdapter from "crossws/adapters/bun";


const app = createApp();
const router = createRouter();

app.use(router);

router.get(
  "/",
  defineEventHandler((event) => {
    return "Hello, World!";
  })
);

const { websocket, handleUpgrade } = wsAdapter(app.websocket);

const handler = toWebHandler(app)

Bun.serve({
  port: 3000,
  websocket,
  async fetch(req, server) {
    if (await handleUpgrade(req, server)) {
      return;
    }

    return handler(req)
  }
});
