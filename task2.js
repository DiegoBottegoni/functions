const getFullName = (person) => {
    try {
      if (typeof person !== 'object' || person === null || Array.isArray(person)) {
        throw new Error('The argument must be a valid object.');
      }
  
      if (typeof person.firstName !== 'string' || typeof person.lastName !== 'string') {
        throw new Error('The object must contain the firstName and lastName properties as text strings.');
      }
  
      return `${person.firstName} ${person.lastName}`;
    } catch (error) {
      return `Error: ${error.message}`;
    }
  };

const filterUniqueWords = text =>
text.split(/\s+/)
    .filter((word, index, array) => array.indexOf(word) === index)
    .sort();

const getAverageGrade = students =>
students.map(student => student.grades.reduce((total, grade) => total + grade, 0) / student.grades.length)
        .reduce((total, grade) => total + grade, 0) / students.length;

// TESTING //

console.log("***********************************")
console.log("getFullName:");
const person = { firstName: "Diego", lastName: "Bottegoni" };
console.log(getFullName(person));
console.log("getFullName error cases:")
const person2 = { firstName: 1, lastName: true};
console.log(getFullName(person2));
const person3 = [ firstName = "Diego", lastName = "Bottegoni"];
console.log(getFullName(person3));
console.log("***********************************")

const text = "apple Banana banana orange apple";
console.log(filterUniqueWords(text));

const students = [
{ name: "Alice", grades: [80, 90, 95] },
{ name: "Bob", grades: [70, 85, 90] },
{ name: "Charlie", grades: [75, 80, 85] }
];
console.log(getAverageGrade(students));

