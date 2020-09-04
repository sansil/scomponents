import { shallowMount } from '@vue/test-utils'
import SButton from '@/components/SButton.vue'


describe('SButton.vue', () => {
  // beforeAll(() => {
  //   wrapperSlotted = mount(SButton, {
  //     // data () {
  //     //   return { myProp: 'small' }
  //     // },
  //     propsData: {
  //       as: 'a',
  //       href: '#'
  //     },
  //     slot: {
  //       default: `<div>sansil</div>`,
  //     },
  //   });
  // });

  // it('render slot', () => {
  //   //let text = wrapperSlotted.find('div')
  //   //expect(wrapperSlotted.is('span')).toBe(true)
  //   expect(wrapperSlotted.html()).toContain('<div>sansil</div>')
  // });

  it('render as anchor', () => {
    // render the component
    const wrapper = shallowMount(SButton, {
      propsData: {
        as: 'a',
        href: '#'
      }
    })
    expect(wrapper.findAll('a').length).toEqual(1)
    wrapper.find('a').trigger('click')
    //const clickCall = wrapper.emitted('click')
    // expect(clickCall).toHaveLength(1)
    expect(wrapper.find('a').attributes().href).toBe('#')
  })
  it('render as button', () => {
    // render the component
    const wrapper = shallowMount(SButton, {
      propsData: {
        as: 'button',
        type: 'button'
      }
    })
    expect(wrapper.findAll('button').length).toEqual(1)
    expect(wrapper.find('button').attributes().type).toBe('button')
  })
});
