// ─────────────────────────────────────────────────────────────────────────
//  calculadora.test.js — LA PRUEBA AUTOMATIZADA (componente clave de la IC)
// ─────────────────────────────────────────────────────────────────────────
//  El servidor de IC corre este archivo en cada push. Si una prueba falla,
//  el pipeline se pone ROJO y NO despliega -> así un error nunca llega al
//  entorno de entrega. Usamos el runner de tests NATIVO de Node ("node:test"),
//  por eso no hace falta instalar ninguna librería externa.

const test = require('node:test');            // framework de testing nativo
const assert = require('node:assert');        // para afirmar resultados esperados
const { sumar, restar } = require('../src/calculadora');  // lo que vamos a probar

// Cada test() describe un caso. assert.strictEqual(obtenido, esperado) falla
// si no coinciden, y esa falla es la que detiene el pipeline.
test('sumar: 2 + 3 = 5', () => {
  assert.strictEqual(sumar(3, 3), 5);
});

test('restar: 5 - 2 = 3', () => {
  assert.strictEqual(restar(5, 2), 3);
});

// TIP demo: si cambiás un "5" por un "6" acá, el pipeline queda ROJO y muestra
// el mecanismo de feedback. Volvé a dejarlo bien y vuelve a VERDE.
