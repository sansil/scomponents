<template>
  <transition leave-active-class="duration-300">
    <div
      class="fixed inset-x-0 bottom-0 z-20 px-4 pb-4 sm:inset-0 sm:flex sm:justify-center"
      v-show="show"
    >
      <!--
    Background overlay, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
      -->
      <transition
        enter-active-class="duration-300 ease-out"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="fixed inset-0 transition-opacity" v-show="show">
          <div class="absolute inset-0 opacity-75 bg-gray-900"></div>
        </div>
      </transition>

      <!--
    Modal panel, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      To: "opacity-100 translate-y-0 sm:scale-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100 translate-y-0 sm:scale-100"
      To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <transition
        enter-active-class="duration-300 ease-out"
        enter-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
        enter-to-class="translate-y-0 opacity-100 sm:scale-100"
        leave-active-class="duration-200 ease-in"
        leave-class="translate-y-0 opacity-100 sm:scale-100"
        leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div
          v-show="show"
          class="relative px-4 pt-8 pb-4 overflow-hidden transition-all transform rounded-lg sm:p-9"
        >
          <span class="absolute top-0 right-0" @click="$emit('close')">
            <svg
              class="text-gray-700 bg-gray-100 rounded-full fill-current w-7 h-7 hover:text-gray-800"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Cerrar</title>
              <path
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </span>
          <slot class="w-full"></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    preventBackgroundScrolling: { default: true },
  },
  created() {
    const scapeHandler = (e) => {
      if (e.key === "Escape" && this.show) {
        this.dismiss();
      }
    };
    document.addEventListener("keydown", scapeHandler);
    this.$once("hook:destroyed", () => {
      document.removeEventListener("keydown", scapeHandler);
    });
  },
  methods: {
    dismiss() {
      this.$emit("close");
    },
  },
  watch: {
    show: {
      inmediate: false,
      handler: function (show) {
        if (show) {
          this.preventBackgroundScrolling &&
            document.body.style.setProperty("overflow", "hidden");
        } else {
          this.preventBackgroundScrolling &&
            document.body.style.removeProperty("overflow");
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>