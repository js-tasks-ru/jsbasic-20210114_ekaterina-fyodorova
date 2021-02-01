/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

let str = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
function getMinMax(str) {
  let stringWithoutSpaces = str.split(' ').join();
  console.log(stringWithoutSpaces);
  let itemsDividedByComma = stringWithoutSpaces.split(',');
  let numbersOnly = itemsDividedByComma
    .filter((item) => item !== '' && isFinite(item));
  console.log(numbersOnly)

}

