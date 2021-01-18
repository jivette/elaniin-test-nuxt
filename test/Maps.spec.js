import { mount } from '@vue/test-utils'
import Maps from '@/components/Maps.vue'

describe('Mounted maps component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Maps, {
        propsData: {
            coords: {
                latitude: '13.252525',
                longitude: "-81.552525"
            }
        }
    });
    
    expect(wrapper.vm).toBeTruthy()
  })
})
