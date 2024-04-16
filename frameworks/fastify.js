import Fastify from 'fastify';

const app = Fastify();

app.get('/', (req, res) => {
  res.send('Hello, World!');
})

app.listen({ port: 3000 });
