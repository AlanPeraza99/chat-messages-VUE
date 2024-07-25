import { useChat } from '@/composables/useChat';
import { useCounter } from '@/composables/UseCounter';
import { sleep } from '@/helpers/sleep';
import { describe, it, expect } from 'vitest';

describe('useCounter', () => {
  it('add nessage cirrectkt wgeb OnMessage is Called', async () => {
    const text = 'Hola mundo';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    expect(messages.value.length).toBe(1);
    expect(messages.value[0].itsMine).toBe(true);
    expect(messages.value[0].message).toBe(text);
    expect(messages.value[0]).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  it('do nothing if texts is empty', async () => {
    const text = '';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    expect(messages.value.length).toBe(0);
  });

  it('get her responses correctly when messages ends with "?"', async () => {
    const text = 'Quieres cafe?';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    await new Promise((r) => setTimeout(r, 2000));
    const [myMessage, herMessage] = messages.value;
    expect(messages.value.length).toBe(2);
    expect(herMessage).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: expect.any(String),
      image: expect.any(String),
    });
    expect(myMessage).toEqual({
      id: expect.any(Number),
      itsMine: true,
      message: text,
    });
  });

  it('mock response -fetch api', async () => {
    const mockResponse = { answer: 'yes', image: 'example.gif' };
    (window as any).fetch = vi.fn(async () => ({
      json: async () => mockResponse,
    }));
    console.log(window.fetch);
    const text = 'Quieres cafe?';
    const { messages, onMessage } = useChat();
    await onMessage(text);
    await new Promise((r) => setTimeout(r, 2000));
    const [, herMessage] = messages.value;

    expect(herMessage).toEqual({
      id: expect.any(Number),
      itsMine: false,
      message: mockResponse.answer,
      image: mockResponse.image,
    });
  });
});
