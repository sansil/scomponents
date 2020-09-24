

<script>
export default {
  render(createElement) {
    return createElement(
      "div",
      { ref: "SGalery" },
      this.$scopedSlots.default({})
    );
  },
};
</script>

