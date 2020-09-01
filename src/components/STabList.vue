

<script>
export default {
  name: "STabList",
  provide() {
    return {
      ["context"]: {
        onChangeTab: this.onChangeTab,
        selectedIndex: this.selectedIndex,
      },
    };
  },
  render() {
    return this.$scopedSlots.default({});
  },
  mounted() {
    // console.log("childs", this.$children[0]);
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  methods: {
    onChangeTab(index) {
      this.selectedIndex = index;
      console.log("change tab", index);
      this.$emit("change", index);
    },
  },
};
</script>
