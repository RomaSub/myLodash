/* _.pull(array, [values])
Удаляет все заданные значения из массива, используя SameValueZero для сравнения на равенство.
Примечание. В отличие от _.without, этот метод изменяет массив. Используйте _.remove для удаления элементов из массива по предикату.
Arguments
array (Array): The array to modify.
[values] (...*): The values to remove.
Returns
(Array): Returns array.

Example
var array = ['a', 'b', 'c', 'a', 'b', 'c'];

_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']
*/

const myPull = (array, ...values) => {
  for (let i = 0; i < array.length; i += 1) {
    const el = array[i];
    if (values.includes(el)) {
      array.splice(i, 1);
      i -= 1;
    }
  }
  return array;
};

const array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log(myPull(array, 'a', 'c')); // ['b', 'b']
