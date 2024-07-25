import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import IndecisionView from '@/views/IndecisionView.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

const mockChatMessages = {
  template: '<div data-testid="mock-messages">Mock ChatMessages</duv>',
};

describe('<IndecisionView />', () => {
  it('renders chat messages and messageBox correctly', () => {
    const wrapper = mount(IndecisionView);
    expect(wrapper.html()).matchSnapshot();

    expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
    expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
  });

  it('calls onMessage when sending a message', async () => {
    const wrapper = mount(IndecisionView, {
      global: {
        stubs: {
          ChatMessages: {
            mockChatMessages,
          },
        },
      },
    });
    //simular el evento personalizado
    const messageBoxComponent = wrapper.findComponent(MessageBox);
    messageBoxComponent.vm.$emit('sendMessage', 'Hola mundo');
    await new Promise((resolve) => {
      setTimeout(resolve, 150);
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
});
