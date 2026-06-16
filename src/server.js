const http = require('http');
const { sumar } = require('./calculadora');

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'dev';

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/sumar') {
    const a = Number(url.searchParams.get('a'));
    const b = Number(url.searchParams.get('b'));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ a, b, resultado: sumar(a, b) }));
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html>
    <h1>Demo CI/CD — UTN Resistencia</h1>
    <p>App desplegada automáticamente por el pipeline de Jenkins.</p>
    <p>Versión (build): <b>${VERSION}</b></p>
    <p>Probar la API: <a href="/sumar?a=2&b=3">/sumar?a=2&b=3</a></p>`);
});

server.listen(PORT, () => console.log(`App escuchando en puerto ${PORT}`));
