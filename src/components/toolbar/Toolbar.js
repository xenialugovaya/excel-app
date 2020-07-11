import ExcelComponent from '../../core/ExcelComponent';

export default class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar';

  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
    });
  }

  toHTML() {
    return `
    <div class="toolbar">
      <div class="toolbar__button">
        <span class="material-icons">format_align_left</span>
      </div>
    </div>`;
  }

  onClick(event) {
    console.log(event.target);
  }
}