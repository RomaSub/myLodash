/* _.cloneDeep(value)
Этот метод похож на _.clone, за исключением того, что он рекурсивно клонирует значение.
Arguments
value (*): The value to recursively clone.
Returns
(*): Returns the deep cloned value.

Example
var objects = [{ 'a': 1 }, { 'b': 2 }];
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
*/

const myCloneDeep = (obj) => {
  const newObj = {};
  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    newObj[key] = typeof newObj[key] === 'object' ? myCloneDeep(value) : value;
  }
  return newObj === obj;
};

const data = {
  key: 'value',
  key2: {
    key: 'innerValue',
    innerKey: {
      anotherKey: 'anotherValue',
    },
  },
};
console.log(myCloneDeep(data));
