const user = [{ name: 'abul', job: 'doctor' }];
console.log(user[0].name);
console.log(user[0].job);

const data = {
    count: 7000,
    data: [
        { id: 1, name: 'piya', job: 'student' },
        { id: 2, name: 'aysha', job: 'teacher' },

    ]
    //chaining
}

console.log(data.count);
console.log(data.data[0].job);
console.log(data.data[0].name);


const men = {
    id: 50002,
    name: 'thomas',
    address: {
        street: {
            first: '23/a kochukhet lane',
            second: 'dolphin road',
            third: 'right side',
            fourth: 'third floor',

        },
        postOffice: 'cantonment',
        city: 'Dkaka',

    }
}

const menRoad = men.address?.street.second; //optional chaining
console.log(menRoad);