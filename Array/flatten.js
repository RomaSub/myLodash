/* _.flatten(array)
Сглаживает массив на один уровень глубины
Arguments
array (Array): The array to flatten.
Returns
(Array): Returns the new flattened array.

Example
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
*/

const myFlatten = (array) => {
  const result = [];

  for (const el of array) {
    if (Array.isArray(el)) {
      result.push(...el);
    } else {
      result.push(el);
    }
  }
  return result;
};

console.log(myFlatten([1, [2, [3, [4]], 5]])); // [1, 2, [3, [4]], 5]
