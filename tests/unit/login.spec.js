import { mount, flushPromises } from '@vue/test-utils'
import LoginView from '../../src/main/pages/LoginView/LoginView.vue'

describe('SnapShot testing for login view.', () => {
  it('SnapShot LoginView.', () => {
    const wrapper = mount(LoginView)
    //expect(wrapper.element).toMatchSnapshot();
  }) 
})

test('SnapShot LoginView.', () => {
  const wrapper = mount(LoginView)
  const input_form = wrapper.find('tbody').findAll('tr')
  expect(input_form[0].findAll('td')[0].text()).toBe('ユーザID：');
  expect(input_form[0].findAll('td')[1].find('input').attributes('id')).toBe('username');
  expect(input_form[1].findAll('td')[0].text()).toBe('Password：');
  expect(input_form[1].findAll('td')[1].find('input').attributes('id')).toBe('password');

  expect(wrapper.find('button').text()).toBe('ログイン')
}) 