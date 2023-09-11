/* _.drop(array, [n=1])
Создает фрагмент массива с n элементами, удаленными с начала
Arguments
array (Array): The array to query.
[n=1] (number): The number of elements to drop.
Returns
(Array): Returns the slice of array.

Example
_.drop([1, 2, 3]);
// => [2, 3]

_.drop([1, 2, 3], 2);
// => [3]

_.drop([1, 2, 3], 5);
// => []

_.drop([1, 2, 3], 0);
// => [1, 2, 3]
*/
const myDrop = (array, n = 1) => {
  const result = [];

  for (let i = n; i < array.length; i += 1) {
    result.push(array[i]);
  }
  return result;
};

console.log(myDrop([1, 2, 3])); // [2, 3]
console.log(myDrop([1, 2, 3], 2)); // [3]
console.log(myDrop([1, 2, 3], 5)); // []
console.log(myDrop([1, 2, 3], 0)); // [1, 2, 3]
