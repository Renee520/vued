import Aside from '@/components/yy-aside';
import Header from '@/components/yy-header';
import Grid from '@/components/yy-grid';
import Loading from '@/components/yy-loading';
import Button from '@/components/yy-button';
import Row from '@/components/yy-row';
import Column from '@/components/yy-column';
import Col from '@/components/yy-col';
import CellGroup from '@/components/yy-cell-group';
import Cell from '@/components/yy-cell';
import Radio from '@/components/yy-radio';
import RadioGroup from '@/components/yy-radio-group';

const components = [
  Aside,
  Header,
  Grid,
  Loading,
  Button,
  Row,
  Column,
  Col,
  CellGroup,
  Cell,
  Radio,
  RadioGroup,
];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default { install };
