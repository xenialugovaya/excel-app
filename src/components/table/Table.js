import resizeHandler from './table.resize';
import shouldResize from './table.functions';
import ExcelComponent from '../../core/ExcelComponent';
import createTable from './table.template';

export default class Table extends ExcelComponent {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'],
    });
  }

  toHTML() {
    return createTable();
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event);
    }
  }
}