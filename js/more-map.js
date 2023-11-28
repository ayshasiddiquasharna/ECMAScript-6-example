const numbers = [12, 44, 24, 27, 15];

const half = numbers.map(n => n / 2);
const thirds = numbers.map(x => x / 3);

console.log(half);
console.log(thirds);

const friends = ['rasel ahmed', 'piya sarma', 'akhil rahman'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);

const friendsLength = friends.map(friend => friend.length);
console.log(friendsLength);


const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 15000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 67000 },
];

const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items);
console.log(prices);
