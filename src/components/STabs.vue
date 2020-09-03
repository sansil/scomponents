

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
  mounted() {
    // console.log("childs", this.$children[0]);
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
      console.log("tab selected: ", this.selectedIndex);
      this.$emit("change", index);
    },
    set(prop, value) {
      this[prop] = value;
      return this[prop];
    },
  },
};
</script>
