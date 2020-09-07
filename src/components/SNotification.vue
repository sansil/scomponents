
<script>
import { state, methods } from "@/components/sheared";
export default {
  props: {
    duration: {
      type: Number,
      default: 1000,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    variant: {
      type: String,
    },
  },
  render(createElement) {
    return createElement(
      "transition-group",
      {
        attrs: {
          name: "fade",
          "enter-active-class":
            this.notifications.length > 1
              ? "transform ease-out duration-300 transition delay-300"
              : "transform ease-out duration-300 transition",
          "enter-class":
            "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4",
          "enter-to-class": "translate-y-0 opacity-100 sm:translate-x-0",
          "leave-active-class": "transition ease-in duration-500",
          "leave-class": "opacity-100",
          "leave-to-class": "opacity-0",
          "move-class": "transition duration-500 ",
          mode: "out-in",
        },
      },
      [
        this.$scopedSlots.default({
          notifications: this.sortedNotifications,
          close: this.close,
        }),
      ]
    );
  },
  // render() {
  //   return this.$scopedSlots.default({
  //     active: this.active,
  //     notifications: this.sortedNotifications,
  //     close: this.close,
  //   });
  // },
  data() {
    return {
      active: true,
      notifications: state.notifications,
    };
  },
  computed: {
    sortedNotifications() {
      return [...this.notifications].reverse().slice(0, 5);
    },
  },
  methods: {
    close(id) {
      this.$emit("close");
      methods.removeNotification(id);
    },
    notify(notification) {
      this.notifications.push({ ...notification, id: this.count });
      this.count = this.count + 1;
    },
    removeElement(el) {
      if (typeof el.remove !== "undefined") el.remove();
      else el.parentNode.removeChild(el);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>