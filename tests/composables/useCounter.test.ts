import { useCounter } from '@/composables/UseCounter';
import { describe, it, expect } from 'vitest';

describe('useCounter', () => {
  it('initializes count with default value', () => {
    const { counter, squareCounter } = useCounter();
    expect(counter.value).toBe(5);
    expect(squareCounter.value).toBe(5 * 5);
  });
  it('initializes count with provided initial value', () => {
    const initialValue = 10;
    const { counter, squareCounter } = useCounter(initialValue);
    expect(counter.value).toBe(initialValue);
    expect(squareCounter.value).toBe(initialValue * initialValue);
  });

  it('increments counter correctlu', () => {
    const { counter, squareCounter } = useCounter();
    counter.value++;
    expect(counter.value).toBe(6);
    expect(squareCounter.value).toBe(36);
  });
});
