<template>
  <div>
    <button @click="showModal=!showModal">apretame</button>
    <SModal :show="showModal" @close="showModal=false">
      <div
        class="grid w-full max-w-xs max-h-screen grid-cols-10 grid-rows-6 gap-4 overflow-hidden sm:max-w-md md:max-w-xl xl:max-w-5xl"
      >
        <!-- <div class="flex justify-center col-span-10 row-span-1 px-1 py-2 overflow-auto"> -->
        <!-- <div class="inline-block">
            <div class="flex justify-start space-x-2 cursor-pointer">
              <button
                class="flex-shrink-0"
                v-for="(img,i) in  imagesArray"
                :key="i"
                ref="mig"
                @click="onSelectImg(i)"
              >
                <img
                  class="object-cover h-20 rounded sm:max-h-24 max-h-11"
                  :class="{'border':isActive(img)}"
                  :src="img.src"
                  alt
                />
              </button>
            </div>
        </div>-->
        <!-- </div> -->

        <div
          class="flex items-center justify-center h-full col-span-10 row-span-6 mt-1 md:items-center"
        >
          <transition
            enter-active-class="transition duration-300 "
            enter-class="opacity-0"
            enter-to-class="opacity-100 "
            leave-active-class="transition duration-300 "
            leave-class="opacity-100 "
            leave-to-class="opacity-0 "
            mode="out-in"
          >
            <div :key="selectedImg.key" class>
              <!-- <img
            class="w-full"
            src="https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png"
            alt="images tes"
              />-->
              <!-- enter-active-class="transition duration-300 ease-out transform"
              enter-class="-translate-x-4 opacity-0 "
              enter-to-class="translate-x-0 opacity-100"
              leave-active-class="transition duration-500 ease-in"
              leave-class="opacity-100"
              leave-to-class="opacity-0"
              move-class="transition duration-500"-->
              <SImageLoader>
                <img
                  slot="image"
                  class="flex-shrink-0 object-scale-down w-full mx-auto"
                  :src="selectedImg.src"
                  alt
                  style="max-height: 75vh;"
                />
                <img
                  slot="preloader"
                  class="flex-shrink-0 object-scale-down w-full mx-auto"
                  src="https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif"
                  alt
                  style="max-height: 75vh;"
                />
              </SImageLoader>
            </div>
          </transition>
          <span
            class="absolute bottom-0 left-0 font-medium text-gray-100 text-opacity-75 sm:left-5 sm:top-12"
          >{{currentImage}} / {{totalImages}}</span>
          <button
            class="absolute left-0 flex flex-col items-start justify-center text-2xl font-semibold text-gray-100 rounded-lg opacity-50 md:text-5xl sm:top-1/2 sm:px-2 sm:mx-2"
            @click="prev"
          >&#10094;</button>
          <button
            class="absolute right-0 flex flex-col items-end justify-center text-2xl font-semibold text-gray-100 rounded-lg opacity-50 md:text-5xl sm:top-1/2 sm:px-2 sm:mx-2"
            @click="next"
          >&#10095;</button>
          <button
            class="absolute right-0 flex flex-col items-end justify-center text-2xl font-semibold text-gray-100 rounded-lg opacity-50 sm:text-4xl top-20 sm:top-5 sm:px-2 sm:mx-2"
            @click="showModal=!showModal"
          >&#88;</button>
        </div>
        <!-- images footer -->
      </div>
    </SModal>
  </div>
</template>

<script>
import SModal from "@/components/SModal.vue";
import SImageLoader from "@/components/SImageLoader.vue";
export default {
  components: {
    SModal,
    SImageLoader,
  },
  data() {
    return {
      showModal: false,
      selectedImg: { src: "https://wallpaperaccess.com/full/969759.jpg" },
      imagesArray: [
        { src: "https://wallpaperaccess.com/full/969759.jpg", key: 1 },
        {
          src:
            "https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png",
          key: 10,
        },
        { src: "https://i.loli.net/2018/11/10/5be6852dec46e.jpeg", key: 2 },
        { src: "https://i.loli.net/2018/11/10/5be6852e33f19.jpeg", key: 3 },
        { src: "https://i.loli.net/2018/11/10/5be6852cdb002.jpeg", key: 4 },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png", key: 5 },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png", key: 6 },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png", key: 6 },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png", key: 6 },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png", key: 6 },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png", key: 6 },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png", key: 6 },
      ],
    };
  },
  mounted() {
    this.selectedImg = this.imagesArray[0];
  },
  computed: {
    totalImages() {
      return this.imagesArray.length;
    },
    currentImage() {
      return this.imagesArray.indexOf(this.selectedImg) + 1;
    },
  },
  methods: {
    onSelectImg(i) {
      console.log(i);
      this.selectedImg = this.imagesArray[i];
    },
    prev() {
      let index = this.imagesArray.findIndex((img) => this.selectedImg == img);
      if (index > 0) this.selectedImg = this.imagesArray[--index];
    },
    next() {
      let index = this.imagesArray.findIndex((img) => this.selectedImg == img);
      if (index < this.imagesArray.length - 1)
        this.selectedImg = this.imagesArray[++index];
      else this.selectedImg = this.imagesArray[0];
    },
    isActive(img) {
      return this.selectedImg === img;
      // if (this.selectedImg === img) {
      //   console.log(this.$refs["mig"][0]);
      //   this.$refs["mig"][0].focus();
      // }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>