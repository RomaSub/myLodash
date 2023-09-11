/* _.compact(array)
Создает массив, из которого удалены все ложные значения.
Значения false, null, 0, "", undefine и NaN являются ложными.
Arguments
array (Array): The array to compact.
Returns
(Array): Returns the new array of filtered values.

Example
_.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
*/

const myCompact = (array) => array.filter(Boolean);

console.log(myCompact([0, 1, false, 2, '', 3, undefined, null, NaN])); // [1, 2, 3]
