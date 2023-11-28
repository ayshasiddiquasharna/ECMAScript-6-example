class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback`);
    }

}


class Instructor extends TeamMember {
    designation = 'web course '
    team = 'web team'
    constructor(name, location) {
        super(name, location);
    }
    startSuppportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    creatQuize(module) {
        console.log(`creat quize ${module}`)
    }

}


class developer extends TeamMember {
    designation = 'web course '
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developerFeature(feature) {
        console.log(`please develope the feature ${feature}`)
    }
    release(version) {
        console.log(`release version ${version}`)
    }
}


class JobPlacement extends TeamMember {
    designation = 'job placement '
    team = 'job placement team'
    region;
    constructor(name, location, region) {
        super(name, location);
        this.region = region;
    }
    provideResume(resume) {
        console.log(`send resume ${resume}`)
    }
    release(version) {
        console.log(`release version ${version}`)
    }
}

const alia = new developer('alia', 'dhaka', 'react');
console.log(alia);
alia.provideFeedback();
const bipasa = new JobPlacement('bipasa', 'barishal', 'bangladesh');
console.log(bipasa);