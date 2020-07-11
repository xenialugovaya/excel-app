const CODES = {
  A: 65,
  Z: 90,
};

function toCell(content) {
  return `
    <div class="table__cell" contenteditable>${content}</div>
  `;
}

function toColumn(content) {
  return `
    <div class="table__column">${content}</div>
  `;
}

function createRow(rowIndex, content) {
  return `
    <div class="table__row">
      <div class="table__row-info">${rowIndex || ''}</div>
      <div class="table__row-data">${content}</div>
    </div>
  `;
}

function toChar(code) {
  return String.fromCharCode(code);
}

export default function createTable(rowsCount = 100) {
  const colsCount = CODES.Z - CODES.A;
  const rows = [];
  const chars = [];
  const cells = [];

  for (let i = 0; i <= colsCount; i++) {
    chars.push(CODES.A + i);
    cells.push('');
  }

  const columnHeaders = chars
    .map(toChar)
    .map(toColumn)
    .join('');

  rows.push(createRow(null, columnHeaders));

  for (let i = 0; i < rowsCount; i++) {
    const columns = cells
      .map(toCell)
      .join('');
    rows.push(createRow(i + 1, columns));
  }
  return rows.join('');
}
