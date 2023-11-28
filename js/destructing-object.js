const fish = {
    name: 'hilsa',
    address: 'chandpur',
    color: 'silver',
    price: 4000,
}

//const color = fish.color; // কোন একটি object এ যে  property আছে তা দিয়ে একটি variable declare করেছি ।


const { color } = fish;
console.log(color);

const { age, name, profession } = { name: 'Áyan', age: 45, profession: 'makeup artist' };
console.log(age);

//array destructing

const [first, another] = [33, 55, 77, 23];
console.log(first, another);

const bird = ['doyal', 'moyna', 'tia'];
const [king, pakhi, sundori] = bird;
console.log(pakhi);


function getNames() {
    return ['alim', 'halim'];
}

const [baba, chacha] = getNames();
console.log(baba); 