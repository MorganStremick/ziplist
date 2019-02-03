function zipList(arr1, arr2) {
  const arr = [];
  for (let i = 0; i < arr1.length; i++) {
    arr.push(arr1[i]);
    arr.push(arr2[i]);
  }
  return arr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];
console.log(`arr1 = ${arr1}`);
console.log(`arr2 = ${arr2}`);
console.log(`zipList(arr1, arr2) = ${zipList(arr1, arr2)}`);
console.log(`zipListTheSimpleWay(arr1, arr2) = ${zipListTheSimpleWay(arr1, arr2)}`);
