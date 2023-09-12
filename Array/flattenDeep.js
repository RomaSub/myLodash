/* flattenDeep(array)
Рекурсивно выравнивает массив
Arguments
array (Array): The array to flatten.
Returns
(Array): Returns the new flattened array.

Example
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
*/

const myFlattenDeep = (array) => {
  const result = [];
  for (const el of array) {
    if (Array.isArray(el)) {
      result.push(...myFlattenDeep(el));
    } else {
      result.push(el);
    }
  }
  return result;
};

console.log(myFlattenDeep([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
