const add = (first, second) => first + second;
const fullName = (firstName, lastName) => firstName + ' ' + lastName;
const multiply = (a, b) => a * b;

const result = multiply(3, 5);
//console.log(result);

const addAll = (a, b, c, d, e, f) => a + b + c + d + e + f;

//no parameter arrow function

const hello = () => 'Hello world';
console.log(hello);

//one parameter 
const doubleIt = (num) => num * 2;

const fivetimes = num => num * 5;

//multiline arrow function

const doMath = (x, y, z) => {
    const firstSum = x + y;
    const secondSum = y + z;
    const multiplyResult = firstSum * secondSum;
    const result = multiplyResult / 2;
    return result; // if you want to return something then use return function

}