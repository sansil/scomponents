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
              :class="[isSelected?'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700':'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300']"
            >Tab 1</a>
          </STab>
          <STab v-slot="{isSelected}">
            <a
              :tabindex="isSelected?'1':'0'"
              role="tab"
              type="button"
              href="#tab-2"
              :class="[isSelected?'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600  focus:text-indigo-800 focus:border-indigo-700':'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300  focus:text-gray-700 focus:border-gray-300']"
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
    <SButton kind="secondary" @click="addNoti">apretame2</SButton>
    <div
      ref="container"
      class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
    >
      <div class="max-w-sm w-full">
        <SNotification v-slot="{notifications, close}">
          <!-- <transition-group
          appear
          tag="div"
          enter-active-class="transform ease-out duration-300 transition"
          enter-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-500"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          move-class="transition duration-500"
          class="max-w-sm w-full"
          >-->
          <div
            id="sansil"
            class="bg-white shadow-lg rounded-lg pointer-events-auto mt-4"
            v-for="notification in notifications"
            :key="notification.id"
          >
            <div class="rounded-lg shadow-xs overflow-hidden">
              <div class="p-4">
                <div class="flex items-center">
                  <div class="w-0 flex-1 flex justify-between">
                    <p
                      class="w-0 flex-1 text-sm leading-5 font-medium text-gray-900"
                    >{{notification.id}} Discussion archived</p>
                    <button
                      class="ml-3 flex-shrink-0 text-sm leading-5 font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                    >Undo</button>
                  </div>
                  <div class="ml-4 flex-shrink-0 flex">
                    <button
                      @click="close(notification.id)"
                      class="inline-flex text-gray-400 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
                    >
                      <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fill-rule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </transition-group> -->
        </SNotification>
      </div>
    </div>
  </div>
</template>

<script>
import STabList from "@/components/STabList.vue";
import STab from "@/components/STab.vue";
import STabs from "@/components/STabs.vue";
import STabPanel from "@/components/STabPanel.vue";
import STabPanels from "@/components/STabPanels.vue";
import SButton from "@/components/SButton.vue";
import SNotification from "@/components/SNotification.vue";
import Vue from "vue";
export default {
  name: "App",
  components: {
    STabList,
    STab,
    STabs,
    STabPanel,
    STabPanels,
    SButton,
    SNotification,
  },
  data() {
    return {
      testShow: true,
    };
  },
  methods: {
    addNoti() {
      this.$sansil.increment({ title: "title 1", id: 400 });
    },
    onClick() {
      const ComponentClass = Vue.extend(SButton);
      const instance = new ComponentClass({
        // el: document
        //   .getElementById("sansil")
        //   .appendChild(document.createElement("div")),
        // propsData: { type: "primary" },
      });
      instance.$slots.default = `buton`;
      instance.$mount(); // pass nothing
      //         console.log(this.$refs)
      this.$refs.container.appendChild(instance.$el);
      //this.$sansil.show({});
      this.testShow = false;
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
