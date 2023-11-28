const numbers = [12, 6, 8, 45, 32];
const newArray = numbers.map(Math.sqrt);
console.log(newArray);


const multyply = num => num * 2;
const MakeMultiply = numbers.map(multyply);
const MakeMultiplyDirect = numbers.map(num => num * 2);
const MakeMultiplyDirect2 = numbers.map(x => x * 2);

console.log(MakeMultiplyDirect);


const newArr = numbers.map(myFunction)

function myFunction(num) {
    return num * 10;
}
console.log(newArr);
