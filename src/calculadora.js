// ─────────────────────────────────────────────────────────────────────────
//  calculadora.js — LÓGICA DE NEGOCIO (es lo que la prueba automatizada verifica)
// ─────────────────────────────────────────────────────────────────────────
//  A propósito es "muy simple" (lo pide la consigna): dos funciones puras.
//  Pura = mismo input -> mismo output, sin efectos secundarios. Eso las hace
//  fáciles de testear de forma automática en el pipeline de IC.

// Suma dos números. La usa el servidor web (server.js) y la prueba (test/).
function sumar(a, b) {
  return a + b;
}

// Resta dos números.
function restar(a, b) {
  return a - b;
}

// Exportamos las funciones para que las puedan importar otros archivos
// (server.js para responder pedidos, y el test para verificarlas).
module.exports = { sumar, restar };
