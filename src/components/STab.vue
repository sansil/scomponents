
<script>
let id = 0;
export default {
  render(createElement) {
    // var self = this;
    return createElement(
      "a",
      {
        ref: "s-tab",
        on: {
          click: this.onClick,
        },
      },

      this.$scopedSlots.default({}) // arreglo de hijos
    );
  },
  props: {
    isSelected: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.generateId();
    this.$emit("test", { jaj: "ada" });
  },
  methods: {
    onClick() {
      this.$emit("tabselect", this.id);
      console.log("click");
      console.log(this.isSelected);
    },
    generateId() {
      return `s-tab-id-${++id}`;
    },
  },
};
</script>
