import ChatBubble from '@/components/chat/ChatBubble.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<ChatBubble />', () => {
  it('renders own message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: true },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
    expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
    expect(wrapper.find('.bg-blue-200').text()).toContain(message);
    expect(wrapper.find('.bg-gray-300').exists()).toBeFalsy();
  });

  it('renders received message correctly', () => {
    const message = 'Hola mundo';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('img').exists()).toBeFalsy();
  });

  it('renders received message correctly with image', () => {
    const message = 'Hola mundo';
    const image = 'example.jpg';
    const wrapper = mount(ChatBubble, {
      props: { message, itsMine: false, image },
    });

    expect(wrapper.find('.bg-blue-200').exists()).toBe(false);
    expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
    expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    expect(wrapper.find('.bg-blue-200').exists()).toBeFalsy();
    expect(wrapper.find('img').attributes('src')).toBe(image);
  });
});
