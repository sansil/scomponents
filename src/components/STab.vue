
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
  data() {
    return {
      id: "",
    };
  },
  created() {
    this.id = this.generateId();
  },
  methods: {
    onClick() {
      this.$emit("tabselect", this.id);
      console.log("click");
    },
    generateId() {
      return `s-tab-id-${++id}`;
    },
  },
};
</script>
