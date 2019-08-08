import vars from '@/assets/style/var.scss';

const prefixCls = 'yy-picker';
export default {
  name: 'yy-picker',
  props: {
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      prefixCls,
      startY: 0,
      endY: 0,
      stopY: 0,
      scrollY: 0,
    };
  },
  created() {
  },
  render() {
    const that = this;
    const content = [];
    if (this.options.length) {
      this.options.forEach((item) => {
        if (typeof item === 'string') {
          content.push(<li class={`${prefixCls}__item`}>{item}</li>);
        }
        if (typeof item === 'object' && item.text) {
          content.push(<li class={`${prefixCls}__item`}>{item.text}</li>);
        }
      });
    }
    const style = {
      transitionDuration: '200ms',
      transform: `translate3d(0, ${this.scrollY}px, 0)`,
    };
    return [
      <div class={that.prefixCls}>
        <div class={`${that.prefixCls}__content`}
          onTouchstart={that.touchStart}
          onTouchmove={that.touchMove}
          onTouchend={that.touchEnd}
        >
          <ul style={style}>
            {content}
          </ul>
        </div>
        <div class={`${that.prefixCls}__mask`} style={`background-size: 100% ${that.vars.pickerItemHeight * 2}`}></div>
        <div class={`${that.prefixCls}--selected`}></div>
      </div>,
    ];
  },
  methods: {
    touchStart(e) {
      this.startY = e.touches[0].clientY;
    },
    touchMove(e) {
      e.preventDefault();
      if (e.touches[0]) {
        this.endY = e.touches[0].clientY;
      }
      let scrollY = this.endY - this.startY + this.stopY;
      console.log(this.endY, this.startY, this.stopY, scrollY);
      if (scrollY % this.itemHeight !== 0) {
        if (scrollY > this.itemHeight * 3) {
          scrollY = this.itemHeight * 3;
        }
        if (scrollY < -this.itemHeight * (this.options.length - 2)) {
          scrollY = -this.itemHeight * (this.options.length - 2);
        }
      }
      this.scrollY = scrollY;
    },
    touchEnd(e) {
      if (e.touches[0]) {
        this.endY = e.touches[0].clientY;
      }
      let scrollY = this.endY - this.startY + this.stopY;
      if (scrollY % this.itemHeight !== 0) {
        const n = Math.round(scrollY / this.itemHeight);
        scrollY = n * this.itemHeight;
        if (scrollY > this.itemHeight * 2) {
          scrollY = this.itemHeight * 2;
        }
        if (scrollY < -this.itemHeight * (this.options.length - 3)) {
          scrollY = -this.itemHeight * (this.options.length - 3);
        }
      }
      this.scrollY = scrollY;
      this.stopY = this.scrollY;
      console.log(e);
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
  },
};
