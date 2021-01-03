<template>
  <on-click-outside :do="close">
    <div>
      <button
        ref="button"
        @click="open"
        type="button"
        class="p-1 border-blue-500 border"
      >
        <span v-if="value != null">
          {{ value }}
        </span>
        <span v-else>seleccione</span>
      </button>

      <div class="bg-gray-500" v-show="isOpen" ref="dropdown">
        <input type="text" v-model="search" ref="search" />
        <ul v-show="filteredOptions.length > 0">
          <li
            v-for="(option, i) in filteredOptions"
            :key="i"
            @click="select(option)"
          >
            {{ option }}
          </li>
        </ul>
        <div v-show="filteredOptions.length === 0">
          No result for "{{ search }}"
        </div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from "@/components/OnClickOutside.vue";
import { createPopper } from "@popperjs/core";

export default {
  props: ["value", "options", "filterFunction"],
  components: {
    OnClickOutside,
  },
  data() {
    return {
      isOpen: false,
      search: "",
    };
  },
  beforeDestroy() {
    this.popper.destroy();
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options);
      // return this.options.filter((option) =>
      //   option.toLowerCase().startsWith(this.search.toLowerCase())
      // );
    },
  },
  methods: {
    open() {
      this.isOpen = true;
      this.$nextTick(() => {
        this.setupPopper();
        this.$refs.search.focus();
      });
    },
    setupPopper() {
      if (this.popper === undefined) {
        createPopper(this.$refs.button, this.$refs.dropdown, {
          placement: "bottom",
        });
      } else {
        this.popper.scheduleUpdate();
      }
    },
    close() {
      if (!this.isOpen) {
        return;
      }
      this.isOpen = false;
      this.$refs.button.focus();
    },
    select(option) {
      this.$emit("input", option);
      this.search = "";
      this.close();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>