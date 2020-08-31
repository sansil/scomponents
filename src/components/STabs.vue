
<script>
function cloneVNode(vnode, createElement) {
  const clonedChildren =
    vnode.children &&
    vnode.children.map((vnode) => cloneVNode(vnode, createElement));
  const cloned = createElement(vnode.tag, vnode.data, clonedChildren);
  cloned.text = vnode.text;
  cloned.isComment = vnode.isComment;
  cloned.componentOptions = vnode.componentOptions;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnContext = vnode.fnContext;
  cloned.elm = vnode.elm;
  cloned.context = vnode.context;
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.data = vnode.data;
  return cloned;
}
export function cloneVNodeElement(
  vnode,
  { props, attrs, children, ...rest },
  h
) {
  const cloned = cloneVNode(vnode, h);
  return h(
    cloned.componentOptions.Ctor,
    {
      ...cloned.data,
      ...(cloned.componentOptions.listeners || {}),
      props: {
        ...(cloned.data.props || {}),
        ...cloned.componentOptions.propsData,
        ...props,
      },
      attrs: {
        ...(cloned.data.attrs || {}),
        ...attrs,
      },
      ...rest,
    },
    cloned.componentOptions.children || children
  );
}
export default {
  // render(createElement) {
  //   // var self = this;
  //   return createElement(
  //     "div",
  //     {
  //       ref: "s-tabs",
  //     },
  //     this.$scopedSlots.default({}) // arreglo de hijos
  //   );
  // },
  render(createElement) {
    const vnodes = this.$scopedSlots.default({});
    const clones = vnodes.map((vnode, index) => {
      const isSelected = index === this.selectedIndex;
      const handleClick = (event) => {
        // Hack for Safari. Buttons don't receive focus on click on Safari
        // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus

        this.$emit("click", event);
      };
      const clone = cloneVNodeElement(
        vnode,
        {
          props: {
            isSelected,
          },
          nativeOn: {
            click: handleClick,
          },
          on: { click: () => console.log("śansil") },
        },
        createElement
      );
      return clone;
    });

    return createElement("div", { on: { click: this.handleClick } }, clones);
  },
  mounted() {
    this.miselected = false;
    //console.log("childs", this.$children[0]);
  },
  data() {
    return {
      miselected: true,
      selectedIndex: 0,
    };
  },
  methods: {
    handleClick(index) {
      this.miselected = !this.miselected;
      this.onChangeTab(index);
    },
    onChangeTab(index) {
      this.selectedIndex = index;
      this.$emit("change", index);
    },
  },
};
</script>
