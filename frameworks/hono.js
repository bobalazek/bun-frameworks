import { Hono } from 'hono';

const app = new Hono();

app.get('/', () => 'Hello, World!');

export default app;
