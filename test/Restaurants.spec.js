import { mount } from '@vue/test-utils'
import Restaurants from '@/components/Restaurants.vue'

describe('Mounted Restaurants component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Restaurants)
    expect(wrapper.vm).toBeTruthy()
  })
})
