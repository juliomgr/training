const { describe, it } = require('node:test');
const assert = require('node:assert');

describe('Test 1', () => {
  it('debería pasar siempre', () => {
    assert.strictEqual(1 + 1, 2);
  });
});

describe('Test 2', () => {
  it('debería pasar siempre', () => {
    assert.strictEqual('hello'.toUpperCase(), 'HELLO');
  });
});

describe('Test 3', () => {
  it('debería pasar siempre', () => {
    assert.strictEqual([1, 2, 3].length, 3);
  });
});

describe('Test 4', () => {
  it('debería pasar siempre', () => {
    assert.strictEqual(typeof {}, 'object');
  });
});

describe('Test 5', () => {
  it('debería fallar una de cada cinco veces', () => {
    const randomNumber = Math.floor(Math.random() * 5);
    assert.strictEqual(randomNumber, 0);
  });
});
