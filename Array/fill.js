/* _.fill(array, value, [start=0], [end=array.length])
Заполняет элементы массива значениями от начала до конца, но не включая конец.
Arguments
array (Array): The array to fill.
value (*): The value to fill array with.
[start=0] (number): The start position.
[end=array.length] (number): The end position.
Returns
(Array): Returns array.

Example
var array = [1, 2, 3];

_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']

_.fill(Array(3), 2);
// => [2, 2, 2]

_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
*/

const myFill = (array, value, start = 0, end = array.length) => {
  for (let i = start; i < end; i += 1) {
    array[i] = value;
  }
  return array;
};

const array = [1, 2, 3];
console.log(myFill(array, 'a')); // ['a', 'a', 'a']
console.log(myFill(Array(3), 2)); // [2, 2, 2]
console.log(myFill([4, 6, 8, 10], '*', 1, 3)); // [4, '*', '*', 10]
