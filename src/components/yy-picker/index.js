import vars from '@/assets/style/var.scss';
import pickerItem from './picker-item';

const prefixCls = 'yy-picker';
export default {
  name: 'yy-picker',
  components: {
    pickerItem,
  },
  props: {
    options: {
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
      children: [],
    };
  },
  created() {
  },
  render() {
    const that = this;
    let list = [];
    if (this.options.length && !this.options[0].values) {
      list = [this.options];
    }
    if (this.options.length && this.options[0].values) {
      // 多列
      list = this.options;
    }
    console.log(list, typeof list[0].values);
    return [
      <div class={that.prefixCls}>
        <div class={`${that.prefixCls}__mask`} style={`background-size: 100% ${that.vars.pickerItemHeight * 2}`}></div>
        <div class={`${that.prefixCls}--selected`}></div>
        {list.map((item, i) => (
          <pickerItem
            lists={typeof item.values !== 'undefined' && Array.isArray(item.values) ? item.values : item}
            default-idx={item.defaultIdx || that.defaultIdx}
            onChange={() => {
              that.onChange(i);
            }}
          />
        ))}
      </div>,
    ];
  },
  methods: {
    onChange(idex) {
      const { idx } = this.children[idex];
      if (!this.options[0].values) {
        // 单列
        this.$emit('change', {
          picker: this.children[idex],
          idx,
          value: this.options[idx].text || this.options[idx],
        });
      } else {
        const idxs = [];
        const values = [];
        this.children.forEach((item, i) => {
          idxs.push(item.idx);
          values.push(this.options[i].values[item.idx].text || this.options[i].values[item.idx]);
        });
        this.$emit('change', {
          picker: this.children[idex],
          idx: idxs,
          value: values,
        });
      }
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
