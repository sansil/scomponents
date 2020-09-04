import { shallowMount } from '@vue/test-utils'
import SButton from '@/components/SButton.vue'


describe('SButton.vue', () => {
  test('renders slot content', () => {
    const wrapper = shallowMount(SButton, {
      slots: {
        default: '<h1 />'
      }
    })
    expect(wrapper.find('h1').exists()).toBeTruthy()
  })

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
  it('render as button', async () => {
    // render the component
    const wrapper = shallowMount(SButton, {
      propsData: {
        as: 'button',
        type: 'button',
      }
    })
    expect(wrapper.findAll('button').length).toEqual(1)
    //await wrapper.find('button').trigger('click')
    // expect(click).toHaveBeenCalled()
    expect(wrapper.find('button').attributes().type).toBe('button')
  })
});
