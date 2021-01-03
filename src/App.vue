<template>
  <div id="app" class="min-h-screen bg-gray-200">
    <STabs :defaultSelectedTab="1">
      <!-- nav -->
      <div class="border-b border-gray-200">
        <STabList class="flex -mb-px">
          <STab v-slot="{ isSelected }">
            <a
              :tabindex="isSelected ? '1' : '0'"
              role="tab"
              type="button"
              href="#tab-1"
              :class="[
                isSelected
                  ? 'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600 focus:text-indigo-800 focus:border-indigo-700'
                  : 'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300',
              ]"
              >Tab 1</a
            >
          </STab>
          <STab v-slot="{ isSelected }">
            <a
              :tabindex="isSelected ? '1' : '0'"
              role="tab"
              type="button"
              href="#tab-2"
              :class="[
                isSelected
                  ? 'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600  focus:text-indigo-800 focus:border-indigo-700'
                  : 'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300  focus:text-gray-700 focus:border-gray-300',
              ]"
              >Tab 2</a
            >
          </STab>
          <STab v-slot="{ isSelected }">
            <a
              :tabindex="isSelected ? '1' : '0'"
              role="tab"
              type="button"
              href="#tab-2"
              :class="[
                isSelected
                  ? 'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-indigo-500 font-medium text-sm leading-5 text-indigo-600  focus:text-indigo-800 focus:border-indigo-700'
                  : 'transition duration-300 transform  ease-in-out whitespace-no-wrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300  focus:text-gray-700 focus:border-gray-300',
              ]"
              >Tab 3</a
            >
          </STab>
        </STabList>
      </div>
      <!-- Panels -->
      <STabPanels class="px-4 mt-4">
        <STabPanel v-slot="{ isSelected }">
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
        <STabPanel>
          <div>sansil 3</div>
          <nav>mote tab content</nav>
        </STabPanel>
      </STabPanels>
    </STabs>

    <SButton kind="primary" as="a" href="#" @click="onClick" size="lg"
      >Apretame</SButton
    >
    <SButton kind="secondary" @click="addNoti">apretame2</SButton>
    <SButton kind="secondary" @click="demo">demo</SButton>
    <SButton kind="secondary" @click="onClickBot">Bottom</SButton>
    <div
      class="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end"
      grup="info"
    >
      <div class="w-full max-w-sm">
        <notification v-slot="{ notifications, close }">
          <div v-for="notification in notifications" :key="notification.id">
            <div class="mt-4 bg-white rounded-lg shadow-lg pointer-events-auto">
              <div class="overflow-hidden rounded-lg shadow-xs">
                <div class="p-4">
                  <div class="flex items-center">
                    <div class="flex justify-between flex-1 w-0">
                      <p
                        class="flex-1 w-0 text-sm font-medium leading-5 text-gray-900"
                      >
                        {{ notification.title }} {{ notification.text }}
                      </p>
                      <button
                        class="flex-shrink-0 ml-3 text-sm font-medium leading-5 text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500 focus:outline-none focus:underline"
                      >
                        Undo
                      </button>
                    </div>
                    <div class="flex flex-shrink-0 ml-4">
                      <button
                        @click="close(notification.id)"
                        class="inline-flex text-gray-400 transition duration-150 ease-in-out focus:outline-none focus:text-gray-500"
                      >
                        <svg
                          class="w-5 h-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
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
          </div>
        </notification>
      </div>
    </div>
    <!-- seguna noti -->
    <notificationGroup group="warn">
      <notification v-slot="{ notifications, close }">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          class="relative px-4 py-3 mt-4 text-red-700 bg-red-100 border border-red-400 rounded"
          role="alert"
        >
          <strong class="font-bold">Holy smokes!</strong>
          <span class="block sm:inline">Something seriously bad happened.</span>

          <button
            @click="close(notification.id)"
            class="absolute top-0 bottom-0 right-0 px-4 py-3"
          >
            <svg
              class="w-6 h-6 text-red-500 fill-current"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </button>
        </div>
      </notification>
    </notificationGroup>
    <notificationGroup group="foo">
      <div
        class="fixed inset-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
      >
        <div class="w-full max-w-sm">
          <notification v-slot="{ notifications }">
            <div v-for="notification in notifications" :key="notification.id">
              <div
                v-if="notification.type === 'info'"
                class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              >
                <div class="flex items-center justify-center w-12 bg-blue-500">
                  <svg
                    class="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                    />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-blue-500">{{
                      notification.title
                    }}</span>
                    <p class="text-sm text-gray-600">
                      T{{ notification.text }}
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
                v-if="notification.type === 'warning'"
              >
                <div
                  class="flex items-center justify-center w-12 bg-yellow-500"
                >
                  <svg
                    class="w-6 h-6 text-white fill-current"
                    viewBox="0 0 40 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                    />
                  </svg>
                </div>

                <div class="px-4 py-2 -mx-3">
                  <div class="mx-3">
                    <span class="font-semibold text-yellow-500">{{
                      notification.title
                    }}</span>
                    <p class="text-sm text-gray-600">{{ notification.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
    <notificationGroup group="bottom" position="bottom">
      <div
        class="fixed inset-x-0 bottom-0 flex items-start justify-end p-6 px-4 py-6 pointer-events-none"
      >
        <div class="w-full max-w-sm">
          <notification v-slot="{ notifications }">
            <div
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex items-center justify-center w-12 bg-red-500">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z"
                  />
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-red-500">{{
                    notification.title
                  }}</span>
                  <p class="text-sm text-gray-600">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </notification>
        </div>
      </div>
    </notificationGroup>
    {{ data }}
    <SPagination
      v-slot="{
        start,
        end,
        totalItems,
        nextPage,
        prevPage,
        pages,
        isActivePage,
        isEllipsis,
      }"
      :totalItems="121"
      :maxVisiblePages="4"
      :itemsPerPage="5"
      v-model="myPage"
      @change-page="onNewPage"
    >
      <div
        class="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6"
      >
        <div class="flex justify-between flex-1 sm:hidden">
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
            >Previous</a
          >
          <a
            href="#"
            class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700"
            >Next</a
          >
        </div>
        <div
          class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"
        >
          <div>
            <p class="text-sm leading-5 text-gray-700">
              Showing
              <span class="font-medium">{{ start }}</span>
              to
              <span class="font-medium">{{ end }}</span>
              of
              <span class="font-medium">{{ totalItems }}</span>
              results
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex shadow-sm">
              <a
                href="#"
                @click="prevPage"
                class="relative inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-l-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
                aria-label="Previous"
              >
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <span
                v-show="isEllipsis.start"
                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300"
                >...</span
              >
              <!-- <a
                v-for="page in pages"
                :key="page"
                href="#"
                @click="onSelectPage(page)"
                :class="isActivePage(page)?'bg-gray-100 text-gray-700 transition ease-in-out duration-150':''"
                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
              >{{page}}</a>-->
              <SPage
                v-for="page in pages"
                :key="page"
                :page="page"
                :class="
                  isActivePage(page)
                    ? 'bg-gray-100 text-gray-700 transition ease-in-out duration-150'
                    : ''
                "
                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700"
                >{{ page }}</SPage
              >
              <span
                v-show="isEllipsis.end"
                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium leading-5 text-gray-700 bg-white border border-gray-300"
                >...</span
              >

              <a
                href="#"
                @click="nextPage"
                class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium leading-5 text-gray-500 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-r-md hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500"
                aria-label="Next"
              >
                <svg class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </SPagination>
    <s-search
      v-model="selectedWord"
      :options="options"
      :filter-function="
        (search, options) => {
          return options.filter((option) =>
            option.toLowerCase().startsWith(search.toLowerCase())
          );
        }
      "
    ></s-search>
    <div class="max-w-sm p-3 bg-white rounded-lg">
      <trend
        :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth
      ></trend>
    </div>
    <div class="w-full max-w-lg mx-auto mt-4 bg-white rounded-lg">
      <chart></chart>
    </div>
    <SLightbox>adasdsad</SLightbox>
    <div
      class="grid max-w-4xl max-h-screen grid-cols-10 grid-rows-6 gap-4 overflow-hidden"
    >
      <div class="col-span-10 row-span-4">
        <!-- <img
            class="w-full"
            src="https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png"
            alt="images tes"
        />-->
        <img
          class="object-cover w-full"
          src="https://wallpaperaccess.com/full/969759.jpg"
          alt
        />
      </div>
      <!-- images footer -->
      <div class="col-span-10 row-span-2 overflow-auto">
        <div class="inline-block">
          <div class="flex justify-start space-x-2">
            <div
              class="flex-1 flex-shrink-0 w-40"
              v-for="(img, i) in [1, 2, 3]"
              :key="i"
            >
              <img
                class="object-cover w-40"
                src="https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="flex flex-row space-x-2">
          <div
            class="flex-1 flex-shrink-0 w-40"
            v-for="(img,i) in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]"
            :key="i"
          >
            <img
              class="object-cover w-40"
              src="https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png"
              alt
            />
          </div>
        </div>
      </div>
    </div>-->
    <SSlideShow></SSlideShow>
    <svg
      class="svg-shape"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1366.3 106.742"
    >
      <path
        fill="currentColor"
        d="M1366.3 40.982q-183.405 50.177-274.4 34.984c-90.992-15.193-181.984-45.58-272.975-35.419-90.993 9.78-181.984 61.058-272.976 65.806S363.967 71.218 272.976 50.612C181.983 30.387 90.991 30.387 45.495 30.387L0 26.33V0h1366.3z"
        opacity="0.149"
      />
      <path
        fill="currentColor"
        d="M0 40.982q183.405 50.177 274.4 34.984c90.992-15.193 181.984-45.58 272.975-35.419 90.993 9.78 181.984 61.058 272.976 65.806s181.984-35.135 272.975-55.741c90.992-20.226 181.984-20.226 227.48-20.226h45.5V0H0z"
        opacity="0.296"
      />
      <path
        fill="currentColor"
        d="M0 27.041q183.405 33.124 274.4 23.1c90.989-10.031 181.981-30.086 272.972-23.379 90.993 6.454 181.984 40.3 272.976 43.431S1002.332 47 1093.324 33.4c90.992-13.35 181.984-13.35 227.48-13.35h45.5V0H0z"
      />
    </svg>
    <div></div>
  </div>
</template>

<script>
import STabList from "@/components/STabList.vue";
import STab from "@/components/STab.vue";
import STabs from "@/components/STabs.vue";
import STabPanel from "@/components/STabPanel.vue";
import STabPanels from "@/components/STabPanels.vue";
import SButton from "@/components/SButton.vue";
import { VTPage, VTPagination } from "vt-pagination";

import axios from "axios";
import SLightbox from "@/components/SLightbox.vue";
import Chart from "@/components/Chart.vue";
import SSlideShow from "@/components/SSlideShow.vue";
import SSearch from "@/components/SSearch.vue";
//import SNotification from "@/components/SNotification.vue";
//import SNotificationGroup from "@/components/SNotificationGroup.vue";
//import Vue from "vue";
export default {
  name: "App",
  components: {
    STabList,
    STab,
    STabs,
    STabPanel,
    STabPanels,
    SButton,
    SPagination: VTPagination,
    SPage: VTPage,
    Chart,
    SLightbox,
    SSlideShow,
    SSearch,
    //SNotification,
    // SNotificationGroup,
  },
  data() {
    return {
      testShow: true,
      selectedWord: null,
      options: ["sansil", "es", "uncapo"],
      myPage: 1,
      chart: null,
      chartLine: null,
      data: [],
    };
  },
  async mounted() {},
  methods: {
    addNoti() {
      this.$notify({ title: "title 1", text: "text 1", group: "warn" }, 4000);
    },

    onClick() {
      this.myPage = 10;
      this.$notify({
        title: "title 1",
        text: "text 2",
        type: "info",
      });
    },
    onClickBot() {
      this.$notify(
        {
          group: "bottom",
          title: "Error",
          text: "Your email is already used!",
        },
        4000
      );
    },
    async onNewPage(p) {
      console.log(p);

      const res = await axios.get(
        `https://aire.innova.antel.net.uy/api/data/search/866425030444154?start=1&page_current=${p}&page_size=5`
      );
      this.data = res.data;
    },
    demo() {
      this.$notify({
        title: "title 1",
        text: "text 1",
        group: "foo",
        type: "info",
      });
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
