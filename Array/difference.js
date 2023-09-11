/*
_.difference(array, [value])
Создает массив значений массива, не включенных в другие заданные массивы, используя SameValueZero
для сравнения на равенство. Порядок и ссылки значений результата определяются первым массивом.
Примечание. В отличие от _.pullAll, этот метод возвращает новый массив.
Arguments
array (Array): The array to inspect.
[values] (...Array): The values to exclude.
Returns
(Array): Returns the new array of filtered values.

Example
_.difference([2, 1], [2, 3]);
// => [1]
*/

const myDifference = (array, value) => array.filter((el) => !value.includes(el));

console.log(myDifference([2, 1], [2, 3])); // [1]
