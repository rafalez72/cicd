// ─────────────────────────────────────────────────────────────────────────
//  calculadora.js — LÓGICA DE NEGOCIO (es lo que la prueba automatizada verifica)
// ─────────────────────────────────────────────────────────────────────────


// Suma dos números. La usa el servidor web (server.js) y la prueba (test/).
function sumar(a, b) {
  return a - b;
}

// Resta dos números.
function restar(a, b) {
  return a - b;
}

module.exports = { sumar, restar };
