import { shallowMount, mount } from '@vue/test-utils'
import STabs from '@/components/STabs.vue'
import STabList from "@/components/STabList.vue";
import STab from "@/components/STab.vue";
import STabPanel from "@/components/STabPanel.vue";
import STabPanels from "@/components/STabPanels.vue";



describe('STabs.vue', () => {
  test('renders slot content', () => {
    const wrapper = shallowMount(STabs, {
      slots: {
        default: '<h1 />'
      }
    })
    expect(wrapper.find('h1').exists()).toBeTruthy()
  })

  // const WrapperComp = {
  //   template: `
  //   <div>
  //       <STabs>
  //       <div>
  //       <STabList>
  //         <STab><button>Section 1 title</button></STab>
  //         <STab><button>Section 1 title</button></STab>
  //       </STabList>
  //       <STabPanels>
  //         <STabPanel><div>Tab content</div></STabPanel>
  //         <STabPanel><div>Tab content2</div></STabPanel>
  //       </STabPanels>
  //       </div>
  //     </STabs>
  //   </div>
  //   `,
  //   components: {
  //     STabs,
  //     STabList,
  //     STab,
  //     STabPanel,
  //     STabPanels
  //   }
  // }
  // test('should render correctly', () => {
  //   const wrapper = mount(WrapperComp)
  //   expect(wrapper.find('STbaList').exists()).toBeTruthy()
  // })

});