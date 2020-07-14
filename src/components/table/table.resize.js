import $ from '../../core/dom';

export default function resizeHandler($root, event) {
  const resizeDirection = event.target.dataset.resize;
  const $resizer = $(event.target);
  const resizerSize = resizeDirection === 'col' ? 'height' : 'width';
  const dimension = resizeDirection === 'col' ? 'width' : 'height';
  const direction = resizeDirection === 'col' ? 'right' : 'bottom';
  $resizer.css({ opacity: 1, [resizerSize]: '100vh' });
  const $parent = $resizer.closest('[data-type="resizable"]');
  const coords = $parent.getCoords();
  const delta = (e) => (resizeDirection === 'col' ? e.pageX - coords.right : e.pageY - coords.bottom);
  let value = 0;
  document.onmousemove = (e) => {
    value = coords[dimension] + delta(e);
    $resizer.css({ [direction]: `${-delta(e)}px` });
  };
  document.onmouseup = () => {
    document.onmousemove = null;
    document.onmouseup = null;
    if (resizeDirection === 'col') {
      const columnIndex = $parent.data.index;
      const $columnCells = $root.findAll(`[data-index="${columnIndex}"]`);
      $columnCells.each((cell) => {
        $(cell).css({ [dimension]: `${value}px` });
      });
    } else if (resizeDirection === 'row') {
      $parent.css({ [dimension]: `${value}px` });
    }
    $resizer.css({ opacity: 0, [resizerSize]: 'auto', [direction]: 0 });
  };
}