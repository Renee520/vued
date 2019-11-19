import vars from '@/assets/style/var.scss';

const prefixCls = 'yy-picker';
export default {
  props: {
    lists: {
      type: Array,
      default: () => [],
    },
    defaultIdx: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      prefixCls,
      startY: 0,
      endY: 0,
      stopY: 0,
      scrollY: 0,
      idx: 0,
      defaultTop: 0,
    };
  },
  created() {
    this.idx = this.defaultIdx;
    this.scrollY = (this.itemHeight * 2) - (this.idx * this.itemHeight);
    this.defaultTop = this.scrollY;
    this.$parent.children.push(this);
  },
  render() {
    const that = this;
    const list = [];
    const style = {
      transitionDuration: '200ms',
      transform: `translate3d(0, ${this.scrollY}px, 0)`,
    };
    if (this.lists.length) {
      this.lists.forEach((item) => {
        if (typeof item === 'string' || typeof item === 'number') {
          list.push(<li class={`${prefixCls}__item`}>{item}</li>);
        }
        if (typeof item === 'object' && item.text) {
          list.push(<li class={`${prefixCls}__item`}>{item.text}</li>);
        }
      });
    }
    return [
      <div class={`${that.prefixCls}__content`} ref="pickerContent"
        onTouchstart={that.touchStart}
        onMousedown={that.touchStart}
      >
      <ul style={style}>
        {list}
      </ul>
    </div>,
    ];
  },
  methods: {
    touchStart(e) {
      e.preventDefault();
      if (e.type === 'touchstart') {
        e.clientY = e.touches[0].clientY;
      }
      this.startY = e.clientY;
      this.$refs.pickerContent.addEventListener('mousemove', this.touchMove);
      this.$refs.pickerContent.addEventListener('touchmove', this.touchMove);
      this.$refs.pickerContent.addEventListener('mouseup', this.touchEnd);
      this.$refs.pickerContent.addEventListener('touchend', this.touchEnd);
      this.$refs.pickerContent.addEventListener('contextmenu', this.touchEnd);
    },
    touchMove(e) {
      e.preventDefault();
      if (e.type === 'touchmove') {
        e.clientY = e.touches[0].clientY;
      }
      this.endY = e.clientY;
      let scrollY = this.endY - this.startY + this.stopY;
      if (scrollY % this.itemHeight !== 0) {
        if (scrollY > this.itemHeight * 3) {
          scrollY = this.itemHeight * 3;
        }
        if (scrollY < -this.itemHeight * (this.lists.length - 2)) {
          scrollY = -this.itemHeight * (this.lists.length - 2);
        }
      }
      this.scrollY = scrollY;
    },
    touchEnd(e) {
      e.preventDefault();
      // if (e.touches[0]) {
      //   this.endY = e.touches[0].clientY;
      // }
      let scrollY = this.endY - this.startY + this.stopY;
      if (scrollY % this.itemHeight !== 0) {
        const n = Math.round(scrollY / this.itemHeight);
        scrollY = n * this.itemHeight;
        if (scrollY > this.itemHeight * 2) {
          scrollY = this.itemHeight * 2;
        }
        if (scrollY < -this.itemHeight * (this.lists.length - 3)) {
          scrollY = -this.itemHeight * (this.lists.length - 3);
        }
      }
      this.scrollY = scrollY;
      this.stopY = this.scrollY;
      this.getIdx();
      this.$refs.pickerContent.removeEventListener('mousemove', this.touchMove);
      this.$refs.pickerContent.removeEventListener('touchmove', this.touchMove);
      this.$refs.pickerContent.removeEventListener('mouseup', this.touchEnd);
      this.$refs.pickerContent.removeEventListener('touchend', this.touchEnd);
      this.$refs.pickerContent.removeEventListener('contextmenu', this.touchEnd);
    },
    getIdx() {
      this.idx = ((this.itemHeight * 2) - this.scrollY) / this.itemHeight;
    },
  },
  computed: {
    vars() {
      return vars;
    },
    itemHeight() {
      return parseInt(this.vars.pickerItemHeight, 10);
    },
  },
  watch: {
    idx(val) {
      if (val >= 0 && this.lists[val]) {
        this.$emit('change');
      }
    },
    lists() {
      this.startY = 0;
      this.endY = 0;
      this.stopY = 0;
      this.scrollY = this.defaultTop;
      this.idx = 0;
      this.$emit('change');
    },
  },
};
