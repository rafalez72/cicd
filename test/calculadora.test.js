

const test = require('node:test');            
const assert = require('node:assert');       
const { sumar, restar } = require('../src/calculadora'); 


//prueba si no coinciden, y esa falla es la que salta la alarma
test('sumar: 2 + 3 = 5', () => {
  assert.strictEqual(sumar(2, 3), 5);
});

test('restar: 5 - 2 = 3', () => {
  assert.strictEqual(restar(5, 2), 3);
});
