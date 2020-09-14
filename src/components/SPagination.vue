

<script>
export default {
  props: {
    startPage: {
      type: Number,
      default: 1,
      validator: (page) => {
        return page > 0;
      },
    },
    itemsPerPage: {
      type: Number,
      default: 10,
      validator: (itemsPerPage) => {
        return itemsPerPage > 0;
      },
    },
    maxVisiblePages: {
      type: Number,
      default: 5,
      validator: (maxVisiblePages) => {
        return maxVisiblePages > 0;
      },
    },
    totalItems: {
      type: Number,
      required: true,
      validator: (totalItems) => {
        return totalItems >= 0;
      },
    },
  },
  render() {
    return this.$scopedSlots.default({
      start: this.start,
      end: this.end,
      totalPages: this.totalPages,
      totalItems: this.totalItems,
      nextPage: this.nextPage,
      prevPage: this.prevPage,
      pages: this.pages,
      onSelectPage: this.onSelectPage,
      isEllipsis: this.isEllipsis,
      isActivePage: this.isActivePage,
    });
  },
  data() {
    return {
      page: this.startPage,
    };
  },
  computed: {
    start() {
      return this.page === 1 ? 1 : this.page * this.itemsPerPage;
    },
    end() {
      let end =
        this.page === 1
          ? this.start + this.itemsPerPage - 1
          : this.start + this.itemsPerPage;
      return this.totalItems <= end ? this.totalItems : end;
    },
    totalPages() {
      return Math.ceil(this.totalItems / this.itemsPerPage) - 1;
    },
    pages() {
      let diff = Math.floor(this.maxVisiblePages / 2);
      let evenOffset = this.maxVisiblePages % 2 === 0 ? 1 : 0;
      if (this.page + diff >= this.totalPages)
        return this.range(
          this.totalPages - this.maxVisiblePages + 1,
          this.totalPages
        );
      if (this.page - diff <= 0) return this.range(1, this.maxVisiblePages);

      return this.range(this.page - diff + evenOffset, this.page + diff);
    },
    isEllipsis() {
      let diff = Math.floor(this.maxVisiblePages / 2);
      let evenOffset = this.maxVisiblePages % 2 === 0 ? 1 : 0;
      return {
        start: this.page - diff > 1 - evenOffset,
        end: this.page + diff < this.totalPages,
      };
    },
  },
  methods: {
    range(x, y) {
      let array = [];
      for (let i = x; i <= y; i++) {
        array.push(i);
      }
      return array;
    },
    nextPage() {
      this.page < this.totalPages ? (this.page = this.page + 1) : "";
    },
    onSelectPage(p) {
      this.page = p;
    },
    prevPage() {
      this.page > 1 ? (this.page = this.page - 1) : "";
    },
    goToFirstPage() {
      this.page = 1;
    },
    goToLastPage() {
      this.page = this.totalPages;
    },
    isActivePage(page) {
      return page === this.page;
    },
  },
};
</script>
