import { mount } from '@vue/test-utils'
import TestView from '../../src/main/pages/TestView.vue'

test('TestView has message.', () => {
  const wrapper = mount(TestView)
  expect(wrapper.find('p').text()).toBe('Vue.jsでComponentTestを書こう!'); //pass
}) 