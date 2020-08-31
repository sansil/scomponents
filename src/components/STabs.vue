
<script>
export default {
  created() {
    console.log("childs", this.$children);
  },
  render(createElement) {
    // var self = this;
    return createElement(
      "div",
      {
        ref: "s-tabs",
      },
      this.$scopedSlots.default({}) // arreglo de hijos
    );
  },
};
</script>
