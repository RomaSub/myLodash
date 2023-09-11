/* _.dropRight(array, [n=1])
Создает фрагмент массива с n элементами, отброшенными с конца
Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.
Returns
(Array): Returns the slice of array.

Example
_.dropRight([1, 2, 3]);
// => [1, 2]

_.dropRight([1, 2, 3], 2);
// => [1]

_.dropRight([1, 2, 3], 5);
// => []

_.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
*/

const myDropRight = (array, n = 1) => {
  const result = [];
  for (let i = array.length - 1 - n; i >= 0; i -= 1) {
    result.unshift(array[i]);
  }
  return result;
};

console.log(myDropRight([1, 2, 3])); // [1, 2]
console.log(myDropRight([1, 2, 3], 2)); // [1]
console.log(myDropRight([1, 2, 3], 5)); // []
console.log(myDropRight([1, 2, 3], 0)); // [1, 2, 3]
