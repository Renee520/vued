import showRouter from '@/router/show';
import formRouter from '@/router/form';
import baseRouter from '@/router/base';

export default {
  data() {
    return {
      options: [],
    };
  },
  created() {
    const { name } = this.$route;
    let currNavRouter = {};
    switch (name) {
      case 'form': currNavRouter = formRouter;
        break;
      case 'show': currNavRouter = showRouter;
        break;
      case 'base': currNavRouter = baseRouter;
        break;
      default: break;
    }
    for (const item of currNavRouter) {
      this.options.push({
        to: item.name,
        text: item.meta.title,
        icon: item.meta.icon,
      });
    }
  },
};
