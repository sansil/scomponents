
<script>
/**
 * Clears out all undefined or nullish vnodes
 * @param {Array<Vue.VNode>} vnodes Array of VNodes
 * @returns {Array<Vue.VNode>}
 */
function cleanChildren(vnodes) {
  if (!vnodes) return [];
  return vnodes.filter((vnode) => vnode.tag);
}

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
  inject: ["$TabContext"],
  render(createElement) {
    const validVnodes = cleanChildren(this.$slots.default);
    //console.log("clonando...");
    const clones = validVnodes.map((vnode, index) => {
      const isSelected = index === this.context.selectedIndex;
      const { onChangeTab } = this.context;
      const handleClick = (event) => {
        onChangeTab(index);
        this.$emit("click", event);
      };
      const clone = cloneVNodeElement(
        vnode,
        {
          props: {
            isSelected, //: this.miselected,
          },
          nativeOn: {
            click: handleClick,
          },
        },
        createElement
      );
      return clone;
    });
    return createElement(
      "div",
      { attrs: { role: "tablist", tabIndex: -1 } },
      clones
    );
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
};
</script>
