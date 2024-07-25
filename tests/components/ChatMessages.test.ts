import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from '@/interfaces/chat-message-interface';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
const messages: ChatMessage[] = [
  { id: 1, message: 'hola', itsMine: true },
  { id: 2, message: 'mundo', itsMine: false, image: 'holamundo.jpg' },
];
describe('<ChatMessages />', () => {
  const wrapper = mount(ChatMessages, {
    props: {
      messages,
    },
  });
  it('renders chat messages correctly', () => {
    const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });
    console.log(chatBubbles.length);
    expect(chatBubbles.length).toBe(messages.length);
  });

  it('scroll down to the bottom after messages update', async () => {
    await wrapper.setProps({
      messages: [...messages, { id: 3, message: 'hey', itsMine: true }],
    });

    await new Promise((r) => setTimeout(r, 150));
  });
});
