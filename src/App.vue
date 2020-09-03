<template>
  <div id="app" class="bg-gray-200 min-h-screen">
    <STabs :defaultSelectedTab="1">
      <!-- nav -->
      <div class="border-b border-gray-200">
        <STabList class="-mb-px flex">
          <STab v-slot="{isSelected}">
            <a
              :tabindex="isSelected?'1':'0'"
              role="tab"
              type="button"
              href="#tab-1"
              :class="[isSelected?'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700':'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300']"
            >Tab 1</a>
          </STab>
          <STab v-slot="{isSelected}">
            <a
              :tabindex="isSelected?'1':'0'"
              role="tab"
              type="button"
              href="#tab-2"
              :class="[isSelected?'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700':'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300']"
            >Tab 2</a>
          </STab>
        </STabList>
      </div>
      <!-- Panels -->
      <STabPanels class="px-4 mt-4">
        <STabPanel v-slot="{isSelected}">
          <transition
            enter-active-class="duration-300 ease-out"
            enter-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="duration-200 ease-in"
            leave-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <div v-show="isSelected">tab 1</div>
          </transition>
        </STabPanel>

        <STabPanel>
          <div>Tab content</div>
          <nav>mote tab content</nav>
        </STabPanel>
      </STabPanels>
    </STabs>
    <SButton kind="primary" as="a" href="#" @click="onClick">apretame</SButton>
    <SButton kind="secondary">apretame2</SButton>
  </div>
</template>

<script>
import STabList from "@/components/STabList.vue";
import STab from "@/components/STab.vue";
import STabs from "@/components/STabs.vue";
import STabPanel from "@/components/STabPanel.vue";
import STabPanels from "@/components/STabPanels.vue";
import SButton from "@/components/SButton.vue";

export default {
  name: "App",
  components: {
    STabList,
    STab,
    STabs,
    STabPanel,
    STabPanels,
    SButton,
  },
  methods: {
    onClick() {
      console.log("click");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
