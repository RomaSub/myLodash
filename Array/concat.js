/* _.concat(array, [values])
Создает новый массив, объединяющий массив с любыми дополнительными массивами и/или значениями.
Arguments
array (Array): The array to concatenate.
[values] (...*): The values to concatenate.
Returns
(Array): Returns the new concatenated array.

Example
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
// => [1, 2, 3, [4]]

console.log(array);
// => [1]
*/

const myConcat = (array, ...arguments) => {
const result = [...array];
    for (const value of arguments) {
        if (Array.isArray(value)) {
            result.push(...value)
        } else {
            result.push(value)
        }
    }
    return result
}

console.log(myConcat([])); // []
console.log(myConcat([], 1, 2, 3)); // [1, 2, 3]
console.log(myConcat([1, 2, 3])); // [1, 2, 3]
console.log(myConcat([1, 2], [3, 4], 5, [6])); // [1, 2, 3, 4, 5, [6]]
console.log(myConcat([1, 2], [3, [4]], [5], [[6]])); // [1, 2, 3, [4], 5, [6]]
