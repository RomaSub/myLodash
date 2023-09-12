/* _.fromPairs(pairs)
Обратный вариант _.toPairs; этот метод возвращает объект, состоящий из пар ключ-значение.
Arguments
pairs (Array): The key-value pairs.
Returns
(Object): Returns the new object.

Example
_.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
*/

const myFromPairs = (array) => array.reduce((acc, [key, value]) => {
  acc[key] = value;
  return acc;
}, {});

console.log(myFromPairs([['a', 1], ['b', 2]])); // { 'a': 1, 'b': 2 }
