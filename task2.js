const getFullName = person => `${person.firstName} ${person.lastName}`;

const filterUniqueWords = text =>
text.split(/\s+/)
    .filter((word, index, array) => array.indexOf(word) === index)
    .sort();

const getAverageGrade = students =>
students.map(student => student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length)
        .reduce((total, grade) => total + grade, 0) / students.length;

// TESTING //

const person = { firstName: "Diego", lastName: "Bottegoni" };
console.log(getFullName(person));

const text = "apple banana banana orange apple";
console.log(filterUniqueWords(text));

const students = [
{ name: "Alice", grades: [80, 90, 95] },
{ name: "Bob", grades: [70, 85, 90] },
{ name: "Charlie", grades: [75, 80, 85] }
];
console.log(getAverageGrade(students));
