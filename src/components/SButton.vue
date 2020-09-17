<template>
  <span class="inline-flex rounded-md shadow-sm">
    <component
      :is="this.as"
      :type="this.as==='button'?this.type:null"
      :href="href"
      :class="[kindClasses, sizeClasses]"
      v-on="$listeners"
    >
      <slot></slot>
    </component>
  </span>
</template>

<script>
export default {
  name: "SButton",
  props: {
    kind: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
    as: {
      type: String,
      default: "button",
    },
    href: {
      type: String,
      default: "null",
    },
    type: {
      type: String,
      default: "button",
      validator(value) {
        return ["button", "submit"].includes(value);
      },
    },
    size: {
      type: String,
      default: "xs",
      validator(value) {
        return ["xs", "lg", "xl"].includes(value);
      },
    },
  },
  computed: {
    kindClasses() {
      return {
        primary:
          "inline-flex items-center  border border-transparent  font-medium rounded text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150",
        secondary:
          "inline-flex items-center  border border-transparent  font-medium rounded text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition ease-in-out duration-150",
      }[this.kind];
    },
    sizeClasses() {
      return {
        xs: "text-xs leading-4 px-2 py-1",
        lg: "px-4 py-2 text-sm leading-5",
        xl: "",
      }[this.size];
    },
  },
};
</script>

<style lang="scss" scoped>
</style>