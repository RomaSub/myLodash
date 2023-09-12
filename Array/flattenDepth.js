/* _.flattenDepth(array, [depth=1])
Рекурсивно сглаживать массив до глубины раз.
Arguments
array (Array): The array to flatten.
[depth=1] (number): The maximum recursion depth.
Returns
(Array): Returns the new flattened array.

Example
var array = [1, [2, [3, [4]], 5]];

_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
*/

const myFlattenDepth = (array, depth = 1) => {
  if (depth === 0) {
    return array.slice();
  }
  const result = [];
  for (const el of array) {
    if (Array.isArray(el)) {
      result.push(...myFlattenDepth(el, depth - 1));
    } else {
      result.push(el);
    }
  }
  return result;
};
const array = [1, [2, [3, [4]], 5]];
console.log(myFlattenDepth(array, 1)); // [1, 2, [3, [4]], 5]
console.log(myFlattenDepth(array, 2)); // [1, 2, 3, [4], 5]
