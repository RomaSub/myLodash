/* _.sample(collection)
Получает случайный элемент из коллекции.
Arguments
collection (Array|Object): The collection to sample.
Returns
(*): Returns the random element.

Example
_.sample([1, 2, 3, 4]);
// => 2
*/

const mySample = (coll) => {
  const random = Math.floor(Math.random() * (coll.length - 0));
  return coll[random];
};

console.log(mySample([1, 2, 3, 4])); // 2
