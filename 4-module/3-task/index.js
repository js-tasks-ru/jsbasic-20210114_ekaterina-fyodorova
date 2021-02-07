/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let trs = document.querySelectorAll('tr');

  for (let i = 1; i < table.rows.length; i++) {
    let row = table.rows[i];
    if (row.cells[2].innerHTML === 'm') {
      row.classList.add('male');
    }
    if (row.cells[2].innerHTML === 'f') {
      row.classList.add('female');
    }
    if (row.cells[3].getAttribute('data-available') === 'true') {
      row.classList.add('available');
    }
    if (row.cells[3].getAttribute('data-available') === 'false') {
      row.classList.add('unavailable');
    }
    if (!row.cells[3].hasAttribute('data-available')) {
      row.setAttribute('hidden', 'true');
    }
    if (row.cells[1].innerHTML < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
