import { mount, flushPromises } from '@vue/test-utils'
import CreateView from '../../src/main/pages/CreateView/CreateView.vue'
import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      loggedIn: true,
      status: [],
      categories: [
        {
            "id": 1,
            "created_date": "2020-12-08T21:12:24.333404Z",
            "category": "Bug"
        },
        {
            "id": 2,
            "created_date": "2020-12-08T21:12:24.333404Z",
            "category": "ToDo"
        },
        {
            "id": 3,
            "created_date": "2020-12-08T21:12:24.333404Z",
            "category": "incidents"
        }
      ]
    }
  },
})

describe('Unit Test for CreateView.vue.', () => {

  it('Show guide message for description input max length.', async() => {
    const chars_length_31 = '1234567890123456789012345678890' 
    const wrapper = mount(CreateView, {
      global: {
        plugins: [store]
      }
    })
    wrapper.find('[data-testid="ticket-description"]').setValue(chars_length_31)
    //算出プロパティの戻り値自体を確認(同期的)
    expect(wrapper.vm.maxLengthValidation).toBe('1 文字 長すぎます。') 
    await flushPromises()
    //算出プロパティによるDOM操作を確認(非同期)
    expect(wrapper.find('[data-testid="maxLengthMessage"]').text()).toBe('1 文字 長すぎます。')

  });

  it('Show Category options from vuex store', ()=> {
    const wrapper = mount(CreateView, {
      global: {
        plugins: [store]
      }
    })
    expect(wrapper.find('[data-testid="categories-select"]').findAll('option')).toHaveLength(3);
    expect(wrapper.find('[data-testid="categories-select"]').findAll('option')[0].html()).toBe(
      '<option value="1">Bug</option>'
    );
  })
})