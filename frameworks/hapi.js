import Hapi from '@hapi/hapi';

const app = Hapi.server({
  port: 3000,
  host: 'localhost',
});

app.route({
  method: 'GET',
  path: '/',
  handler: (req, h) => {
    return 'Hello, World!';
  }
});

await app.start();
