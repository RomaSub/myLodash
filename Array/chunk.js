/* _.chunk(array, [size=1])
Создает массив элементов, разделенных на группы по длине.
Если массив невозможно разделить поровну, последний фрагмент будет состоять из оставшихся элементов.
Arguments
array (Array): The array to process.
[size=1] (number): The length of each chunk
Returns
(Array): Returns the new array of chunks.

Example
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
*/

const myChunk = (array, size) => {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

console.log(myChunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]
console.log(myChunk(['a', 'b', 'c', 'd'], 3)); // [['a', 'b', 'c'], ['d']]
console.log(myChunk(['a', 'b', 'c', 'd', 'e', 'f'], 2)); // [['a', 'b'], ['c', 'd'], ['e', 'f']]
console.log(myChunk(['a'], 2)); // [['a']]
