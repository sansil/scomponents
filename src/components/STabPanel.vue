<script>
let id = 0;
export default {
  render(createElement) {
    return createElement(
      "div",
      {
        attrs: {
          hidden: !this.isSelected,
          role: "tabpanel",
          tabIndex: -1,
        },
      },
      this.$scopedSlots.default({ isSelected: this.isSelected })
    );
  },
  props: {
    isSelected: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  },
  created() {
    this.id = this.generateId();
  },
  methods: {
    generateId() {
      return `s-tab-id-${++id}`;
    },
  },
};
</script>