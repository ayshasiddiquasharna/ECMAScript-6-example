let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
    sum += item;
}
console.log(numbers);


const numbers2 = [9, 6, 12, 4];
numbers2.forEach(myFunction2);

function myFunction2(item, index, arr) {
    arr[index] = item * 10;
}

console.log(numbers2);
