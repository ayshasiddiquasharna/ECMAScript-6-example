const numbers = [23, 33, 45, 65, 20, 98, 12];
const findNumber = numbers.find(number => number % 5 === 0);
console.log(findNumber);


const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 15000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 67000 },
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);