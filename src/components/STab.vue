
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
    name: {
      type: String,
    },
  },
  data() {
    return {
      isSansil: false,
    };
  },
  created() {
    this.id = this.generateId();
    this.$emit("test", { jaj: "ada" });
  },
  computed: {
    toTrue() {
      return true;
    },
  },
  methods: {
    onClick() {
      this.$emit("tabselect", this.id);
      this.isSansil = !this.isSansil;
      console.log("is selected?", this.isSelected);
    },
    generateId() {
      return `s-tab-id-${++id}`;
    },
    isTrue() {
      return !this.isSansil;
    },
  },
};
</script>
