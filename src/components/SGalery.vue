

<script>
export default {
  props: {
    cardWidth: {
      type: Number,
      default: 120,
    },
    repeatCircular: {
      type: Boolean,
      default: true,
    },
    cardsArray: {
      type: Array,
      default: () => [
        { src: "https://wallpaperaccess.com/full/969759.jpg" },
        {
          src:
            "https://cdn.pixabay.com/photo/2012/08/27/14/19/evening-55067__340.png",
          key: 10,
        },
        { src: "https://i.loli.net/2018/11/10/5be6852dec46e.jpeg" },
        { src: "https://i.loli.net/2018/11/10/5be6852e33f19.jpeg" },
        { src: "https://i.loli.net/2018/11/10/5be6852cdb002.jpeg" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://kitiot.antel.com.uy/kit-iot/Node_Diagram.png" },
        { src: "https://i.loli.net/2018/11/10/5be6852dec46e.jpeg" },
      ],
    },
  },
  render() {
    return this.$scopedSlots.default({
      prev: this.prev,
      next: this.next,
      onClickCard: this.onClickCard,
      cardXPos: this.cardXPos,
      transitionStyle: this.transitionStyle,
    });
  },
  data() {
    return {
      cardIndex: 0,
      cardXPos: 0,
    };
  },
  computed: {
    maxCardsWidth() {
      return this.cardsArray.length * this.cardWidth;
    },
    centerPos() {
      return (
        Math.floor(this.galleryWidth / (this.cardWidth * 2)) * this.cardWidth
      );
    },
    currCardWidth() {
      return this.cardIndex * this.cardWidth;
    },
    galleryWidth() {
      console.log(this.$parent.$el.clientWidth);
      return this.$parent.$el.clientWidth;
      // return this.$refs.SGalery.clientWidth;
    },
    transitionStyle() {
      return `transform: translate(${this.cardXPos}px, 0);transition-duration: 0.5s;`;
    },
  },
  methods: {
    prev() {
      if (this.cardIndex > 0) {
        this.cardIndex--;
      } else {
        if (this.repeatCircular) this.cardIndex = this.cardsArray.length - 1;
      }
      this.updateCard();
    },
    next() {
      if (this.cardIndex < this.cardsArray.length - 1) {
        this.cardIndex++;
      } else {
        if (this.repeatCircular) this.cardIndex = 0;
      }
      this.updateCard();
    },
    onClickCard(index) {
      this.cardIndex = index;
      this.updateCard();
    },
    updateCard() {
      // Prevent scrolling of images if not needed
      if (this.maxCardsWidth < this.galleryWidth) {
        return;
      }
      if (this.currCardWidth <= this.centerPos) {
        this.cardXPos = 0;
      } else if (
        this.currCardWidth >=
        this.cardsArray.length * this.cardWidth -
          this.galleryWidth +
          this.centerPos
      ) {
        this.cardXPos = -(
          this.cardsArray.length * this.cardWidth -
          this.galleryWidth
        );
      } else {
        this.cardXPos = -(this.cardIndex * this.cardWidth) + this.centerPos;
      }
    },
  },
};
</script>

