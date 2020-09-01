<template>
  <div id="app" class="bg-gray-200 min-h-screen">
    <STabs>
      <!-- nav -->
      <div class="border-b border-gray-200">
        <STabsNav class="-mb-px flex">
          <STab v-slot="{isSelected}">
            <a
              href="#caca2"
              :class="[isSelected?'whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700':'whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300']"
            >Tab 1</a>
          </STab>
          <STab v-slot="{isSelected}">
            <a
              href="#caca"
              :class="[isSelected?'whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:outline-none focus:text-indigo-800 focus:border-indigo-700':'whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300']"
            >Tab 2</a>
          </STab>
        </STabsNav>
      </div>
      <!-- Panels -->
      <STabPanels>
        <STabPanel>Tab 1</STabPanel>
        <STabPanel>Tab 2</STabPanel>
      </STabPanels>
    </STabs>
  </div>
</template>

<script>
import STabsNav from "@/components/STabsNav.vue";
import STab from "@/components/STab.vue";
import STabs from "@/components/STabs.vue";
import STabPanel from "@/components/STabPanel.vue";
import STabPanels from "@/components/STabPanels.vue";

export default {
  name: "App",
  components: {
    STabsNav,
    STab,
    STabs,
    STabPanel,
    STabPanels,
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
