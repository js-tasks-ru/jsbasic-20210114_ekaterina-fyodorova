/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let result = [];
  let string = '';
  let newString = '';

  for (let i = 0; i < users.length; i++) {
    if (users[i].age <= age) {
      result.push(`${users[i].name}, ${users[i].balance}\n`);
    }
  }

  string = result.join('');
  newString = string.slice(0, string.length - 1);

  return newString;
}

