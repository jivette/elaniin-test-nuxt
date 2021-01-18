import { mount } from '@vue/test-utils'
import Slider from '@/components/Slider.vue'

describe('Mounted Slider component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Slider)
    expect(wrapper.vm).toBeTruthy()
  })
})
