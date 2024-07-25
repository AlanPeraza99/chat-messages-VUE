import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';

describe('<MessageBox />', () => {
  const wrapper = mount(MessageBox);

  it('renders unput and button elements correctly', () => {
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
    expect(wrapper.find('button svg').exists()).toBe(true);
  });

  it('emits sendMessage event when button is clicked with message value', async () => {
    const message = 'Hola mundo';
    await wrapper.find('input[type="text"]').setValue(message);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
    expect((wrapper.vm as any).message).toBe('');
  });

  it('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const message = 'Hola mundo';
    const input = await wrapper.find('input');
    await input.setValue(message);
    await input.trigger('keypress.enter');
    expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);

    expect((wrapper.vm as any).message).toBe('');
  });

  it('emits sendMessage event when keypress.enter is triggered with message value', async () => {
    const wrapper = mount(MessageBox);

    const input = await wrapper.find('input');
    await input.trigger('keypress.enter');
    await wrapper.find('button').trigger('click');
  });
});
