
<script>
let id = 0;
export default {
  render() {
    return this.$scopedSlots.default({
      isSelected: this.isSelected,
      toTrue: this.toTrue,
      isTrue: this.isTrue,
    });
  },
  // render(createElement) {
  //   // var self = this;
  //   return createElement(
  //     "a",
  //     {
  //       ref: "s-tab",
  //       attrs: {},

  //       on: {
  //         click: this.onClick,
  //       },
  //     },

  //     this.$scopedSlots.default({
  //       isSelected: this.isSelected,
  //       toTrue: this.toTrue,
  //       isTrue: this.isTrue,
  //     })

  //     // arreglo de hijos
  //   );
  // },
  props: {
    isSelected: {
      type: Boolean,
      default: true,
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
