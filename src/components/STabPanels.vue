
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
  inject: ["$TabContext"],
  render(createElement) {
    const vnodes = this.$scopedSlots.default({});
    const clones = vnodes.map((vnode, index) => {
      const isSelected = index === this.context.selectedIndex;
      const clone = cloneVNodeElement(
        vnode,
        {
          props: {
            isSelected,
          },
        },
        createElement
      );
      return clone;
    });
    return createElement("div", {}, clones);
  },
  data() {
    return {
      selectedIndex: 0,
    };
  },
  computed: {
    context() {
      return this.$TabContext();
    },
  },
  methods: {},
};
</script>
