const numbers = [23, 33, 45, 65, 20, 98, 12];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(n => n < 20);
const even = numbers.filter(num => num % 2 === 0);

console.log(bigNumbers);
console.log(smallNumbers);
console.log(even);


const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 15000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 67000 },
];
const expensive = products.filter(product => product.price > 20000);
const expensive2 = products.filter(p => p.price > 100000);
const inexpensive = products.filter(pro => pro.price < 40000);

console.log(expensive);
console.log(expensive2);
console.log(inexpensive);