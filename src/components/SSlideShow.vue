<template>
  <div class="max-w-3xl">
    <SGalery
      v-slot="{next,prev,onClickCard,transitionStyle}"
      :cardsArray="cardsArray"
      :cardWidth="cardWidth"
    >
      <div>
        <button @click="prev">prev slide</button>
        <button @click="next">Next slide</button>
        <div class="inline-flex overflow-hidden" ref="SGalery">
          <button
            class="flex-shrink-0"
            v-for="(img,i) in  cardsArray"
            :key="i"
            @click="onClickCard(i)"
            :style="transitionStyle"
          >
            <img
              class="object-cover h-20 px-3 rounded sm:max-h-24 max-h-11"
              :src="img.src"
              alt
              :style="`width: ${cardWidth}px`"
            />
          </button>
        </div>
      </div>
    </SGalery>
  </div>
</template>

<script>
import SGalery from "@/components/SGalery.vue";
export default {
  components: {
    SGalery,
  },
  props: {
    cardWidth: {
      type: Number,
      default: 120,
    },
    repeatCircular: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      cardsArray: [
        { src: "https://wallpaperaccess.com/full/969759.jpg" },
        {
          src:
            "https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png",
          key: 10,
        },
        { src: "https://i.loli.net/2018/11/10/5be6852dec46e.jpeg" },
        { src: "https://i.loli.net/2018/11/10/5be6852e33f19.jpeg" },
        { src: "https://i.loli.net/2018/11/10/5be6852cdb002.jpeg" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://i.loli.net/2018/11/10/5be6852dec46e.jpeg" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>