import { mount } from '@vue/test-utils'
import ListAddress from '@/components/ListAddress.vue'

describe('Mounted List Address component', () => {
  test('is a Vue instance', () => {
    const testLocationFunc = jest.fn();

    const wrapper = mount(ListAddress, {
        propsData: {
            onChangeLocation: testLocationFunc,
            dataLocation: []
        }
    });
    
    expect(wrapper.vm).toBeTruthy()
  })
})
