<template>
  <div>
    <button @click="showModal=!showModal">apretame</button>
    <SModal :show="showModal" @close="showModal=false">
      <div class="max-h-screen max-w-screen-md grid grid-rows-6 grid-cols-10 gap-4 overflow-hidden">
        <div class="overflow-auto row-span-1 col-span-10">
          <div class="inline-block">
            <div class="space-x-2 flex justify-start cursor-pointer">
              <div
                class="flex-1 flex-shrink-0 w-20 border-2 rounded-lg"
                v-for="(img,i) in  imagesArray"
                :key="i"
                @click="onSelectImg(i)"
              >
                <img class="object-cover w-20" :src="img.src" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="row-span-5 col-span-10 relative">
          <div>
            <!-- <img
            class="w-full"
            src="https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png"
            alt="images tes"
            />-->
            <img class="object-cover" :src="selectedImg.src" alt />
          </div>
          <button
            class="absolute w-40 text-red-600 inset-0 justify-center flex items-start flex-col"
          >&#10094;</button>
          <button
            class="absolute w-40 text-red-600 inset-0 justify-center flex items-end flex-col"
          >&#10095;</button>
        </div>
        <!-- images footer -->
      </div>
    </SModal>
  </div>
</template>

<script>
import SModal from "@/components/SModal.vue";
export default {
  components: {
    SModal,
  },
  data() {
    return {
      showModal: false,
      selectedImg: { src: "https://wallpaperaccess.com/full/969759.jpg" },
      imagesArray: [
        { src: "https://wallpaperaccess.com/full/969759.jpg" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
      ],
    };
  },
  methods: {
    onSelectImg(i) {
      console.log(i);
      this.selectedImg = this.imagesArray[i];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>