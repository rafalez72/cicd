// ─────────────────────────────────────────────────────────────────────────
//  server.js — LA APLICACIÓN WEB que se construye, prueba y despliega
// ─────────────────────────────────────────────────────────────────────────
//  Es un servidor HTTP mínimo hecho solo con módulos nativos de Node
//  (sin dependencias externas, para que la demo sea simple y robusta).
//  Este archivo es el que termina corriendo dentro del contenedor desplegado
//  en el "entorno de entrega" (http://localhost:8081).

const http = require('http');                 // módulo nativo para crear el server
const { sumar } = require('./calculadora');   // importa la lógica de negocio

// El puerto y la versión se leen de variables de entorno.
// APP_VERSION la inyecta el pipeline (número de build) -> así vemos en pantalla
// qué versión quedó desplegada y comprobamos que el deploy automático funcionó.
const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || 'dev';

// Cada vez que llega un pedido HTTP se ejecuta esta función.
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  // Endpoint de API: /sumar?a=2&b=3  ->  {"a":2,"b":3,"resultado":5}
  if (url.pathname === '/sumar') {
    const a = Number(url.searchParams.get('a'));
    const b = Number(url.searchParams.get('b'));
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ a, b, resultado: sumar(a, b) }));
    return;
  }

  // Cualquier otra ruta devuelve una página HTML simple de bienvenida.
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`<!doctype html>
    <h1>Demo CI/CD — UTN Resistencia</h1>
    <p>App desplegada automáticamente por el pipeline de Gitea Actions.</p>
    <p>Versión (build): <b>${VERSION}</b></p>
    <p>Probar la API: <a href="/sumar?a=2&b=3">/sumar?a=2&b=3</a></p>`);
});

// Levanta el servidor y lo deja escuchando pedidos.
server.listen(PORT, () => console.log(`App escuchando en puerto ${PORT}`));
