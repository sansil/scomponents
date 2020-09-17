<template>
  <div>
    <button @click="showModal=!showModal">apretame</button>
    <SModal :show="showModal"></SModal>
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
    };
  },
};
</script>

<style lang="scss" scoped>
</style>