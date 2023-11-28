class Instructor {
    name;
    designation = 'web course '
    team = 'web team'
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    startSuppportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    creatQuize(module) {
        console.log(`creat quize ${module}`)
    }
}

const amir = new Instructor('amir', 'dhaka');
console.log(amir);
amir.startSuppportSession('8.00');
amir.creatQuize(50);