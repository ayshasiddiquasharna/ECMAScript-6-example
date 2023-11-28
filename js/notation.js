const student = {
    name: 'karim ahmed',
    age: 15,
    class: 'ten',
    marks: {
        math: 87,
        physics: 54,
        english: 98,
    },
}

const marks = student.marks;
const math = student.marks.math;


const chemestry = student['marks']['english'];

const subject = 'math';
const subjectMarks = student.marks[subject];
console.log(subjectMarks);
console.log(chemestry);