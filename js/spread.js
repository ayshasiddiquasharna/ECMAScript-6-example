const a = Math.max(12, 54, 876.90);
console.log(a);

const array = [13, 54, 66, 86];
const largestNumber = Math.max(...array);
console.log(...array);
console.log(largestNumber);

/*const numbers = array;
array.push(44);
numbers.push(666);
console.log(array);
console.log(numbers);*/

//if we want new array
const numbers1 = [...array];
array.push(44);
numbers.push(666);
console.log(array);
console.log(numbers);


const numbers2 = [...array];
const numbers3 = [345, ...array, 123];
