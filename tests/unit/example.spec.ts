import { shallowMount } from '@vue/test-utils';
import HomeComponent from '@/views/Home.vue';

describe('Home.vue', () => {
  it('renders text when passed', () => {
    const text = 'ホーム';
    const wrapper = shallowMount(HomeComponent);
    expect(wrapper.text()).toMatch(text);
  });
});
