import { mount } from '@vue/test-utils'
import AboutUs from '@/components/AboutUs.vue'

describe('About Us', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AboutUs)
    expect(wrapper.vm).toBeTruthy()
  })
})
