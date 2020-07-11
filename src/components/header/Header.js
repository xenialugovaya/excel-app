import ExcelComponent from '../../core/ExcelComponent';

export default class Header extends ExcelComponent {
  static className = 'excel__header';

  toHTML() {
    return `
      <div class="header">
        <input class="header__input" type="text" value="Новая таблица" />
        <div class="header__buttons">
          <div class="header__button"><span class="material-icons">delete</span></div>
          <div class="header__button"><span class="material-icons">exit_to_app</span></div>
        </div>
      </div>`;
  }
}