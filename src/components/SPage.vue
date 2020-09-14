

<script>
export default {
  inject: {
    context: { default: { group: "" } },
  },
  props: {
    as: {
      type: String,
      default: "a",
    },
    page: {
      type: [String, Number],
      required: true,
    },
  },
  render(createElement) {
    return createElement(
      this.as,
      {
        attrs: {
          href: "#",
        },
        on: {
          click: this.onSelectPage,
        },
      },
      [this.$scopedSlots.default({})]
    );
  },
  methods: {
    onSelectPage() {
      console.log("sansil");
      this.context.onSelectPage(this.page);
    },
  },
};
</script>

