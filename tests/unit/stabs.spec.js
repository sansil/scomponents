import { shallowMount } from '@vue/test-utils'
import Stabs from '@/components/STabs.vue'


describe('Stabs.vue', () => {
  test('renders slot content', () => {
    const wrapper = shallowMount(Stabs, {
      slots: {
        default: '<h1 />'
      }
    })
    expect(wrapper.find('h1').exists()).toBeTruthy()
  })

  // it('render as anchor', () => {
  //   // render the component
  //   const wrapper = shallowMount(SButton, {
  //     propsData: {
  //       as: 'a',
  //       href: '#'
  //     }
  //   })
  //   expect(wrapper.findAll('a').length).toEqual(1)
  //   wrapper.find('a').trigger('click')
  //   expect(wrapper.find('a').attributes().href).toBe('#')
  // })

});