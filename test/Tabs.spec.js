import { mount } from '@vue/test-utils'
import Tabs from '@/components/Tabs.vue'

describe('Mounted Tabs component', () => {
  test('is a Vue instance', () => {
    const testLocationFunc = jest.fn();

    const wrapper = mount(Tabs, {
        propsData: {
            getlocation: testLocationFunc
        }
    });
    
    expect(wrapper.vm).toBeTruthy()
  })
})
