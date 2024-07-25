import { mount } from '@vue/test-utils';
import MyCounter from '@/components/MyCounter.vue';
import { describe, it, expect } from 'vitest';

describe('<MyCounter />', () => {
  it('should match snapshot', () => {
    const wrapper = mount(MyCounter, {
      props: {
        value: 5,
      },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('rendes the counter value correctly', () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });

    expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
    expect(wrapper.find('[data-testid="square-label"]').text()).toContain(
      `Square: ${value * value}`,
    );
    // console.log(wrapper.html());
  });

  it('increments the counter when +1 button is clicked', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');

    const btnIncrement = wrapper.find('button');

    await btnIncrement.trigger('click');
    expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
    expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
  });

  it('decrements the counter when -2 button is clicked twice', async () => {
    const value = 5;
    const wrapper = mount(MyCounter, {
      props: {
        value: value,
      },
    });
    const [counterLabel, squareLabel] = wrapper.findAll('h3');
    const [, btnDecrement] = wrapper.findAll('button');

    await btnDecrement.trigger('click');
    await btnDecrement.trigger('click');
    expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
    expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
  });
});
