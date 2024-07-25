import { expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';
import { describe } from 'node:test';

describe('SUM function', () => {
  test('add 1+2 equal 3', () => {
    //preparacion
    const a = 1;
    const b = 4;
    //estimulo
    const result = sum(a, b);

    //el comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('Addarray function', () => {
  test('should return 0 if the array is empty', () => {
    //preparacion
    const numberArray = [];
    //estimulo
    const result = addArray(numberArray);

    //el comportamiento esperado
    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    //preparacion
    const numberArray = [1, 2, 3, 4, 5];
    //estimulo
    const result = addArray(numberArray);
    //el comportamiento esperado
    expect(result).toBe(15);
  });
});
