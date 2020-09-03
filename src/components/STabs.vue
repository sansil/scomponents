

<script>
export default {
  name: "STabs",
  props: {
    defaultSelectedTab: {
      type: Number,
      default: 0,
    },
  },
  provide() {
    return {
      $TabContext: () => this.TabContext,
    };
  },
  render(createElement) {
    return createElement("div", {}, this.$scopedSlots.default({}));
  },

  data() {
    return {
      selectedIndex: this.defaultSelectedTab,
    };
  },
  computed: {
    TabContext() {
      return {
        onChangeTab: this.onChangeTab,
        selectedIndex: this.selectedIndex,
      };
    },
  },
  methods: {
    onChangeTab(index) {
      this.selectedIndex = index;
      this.$emit("change", index);
    },
  },
};
</script>
