//javascript er moddhe amra jevabe string declare kortam

const person1 = 'adam smith';
const person2 = "ben white";

//ES6 er moddhe jevabe string declare hoy

const person3 = `donald trump`;

// multiline in js 

const multiline = 'first line of text \n' +
    'second line of text \n'
    + 'third line of text ';
console.log(multiline);

//multiline in ES6

const newMultiline = `first line of text
    second line of text 
    third line of text `;
console.log(newMultiline);

// dynamic string of ES6

const a = 20;
const b = 30;
const nums = [34, 65, 23, 44, 120];

const newSummery = `sum of ${a} ,${b} and ${nums.length} is : ${a + b + nums.length}`;
console.log(newSummery);