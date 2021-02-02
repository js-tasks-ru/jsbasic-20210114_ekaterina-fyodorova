/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function getMinMax(str) {
  let result = {};

  let string = str.split(' ').join();
  let newString = string.split(',');
  let numbers = newString.filter((item) => item && isFinite(item));

  numbers.sort((a, b) => a - b);

  result.min = +numbers[0];
  result.max = +numbers[numbers.length - 1];
  return result;
}

