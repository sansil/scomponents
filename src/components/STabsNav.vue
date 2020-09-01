
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
    const validVndoes = cleanChildren(this.$slots.default);
    //const vnodes = this.$scopedSlots.default({});
    console.log("clonando...");
    const clones = validVndoes.map((vnode, index) => {
      const isSelected = index === this.context.selectedIndex;
      const { onChangeTab } = this.context;
      const handleClicks = (event) => {
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
            click: handleClicks,
          },
        },
        createElement
      );
      return clone;
    });

    return createElement("div", {}, clones);
  },
  async mounted() {
    console.log("mounted");
    await this.$nextTick();
    //this.miselected = false;
    //console.log("childs", this.$children[0]);
  },
  data() {
    return {
      miselected: true,
      selectedIndex: 0,
    };
  },
  computed: {
    context() {
      return this.$TabContext();
    },
  },
  methods: {
    handleClick() {
      console.log("wtf");
      // this.miselected = !this.miselected;
      // this.onChangeTab(index);
    },
  },
};
</script>
