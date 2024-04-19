import Bao from 'baojs';

const app = new Bao();

app.get('/', (ctx) => {
  return ctx.sendText('Hello, World!');
})

app.listen({ port: 3000, hostname: 'localhost' });
