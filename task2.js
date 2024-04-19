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

const toLowerCaseAndSplit = text => text.toLowerCase().split(/\s+/);
const filterUnique = words =>
  words.filter((word, index, array) => array.indexOf(word) === index);
const sortWords = words => words.sort();
const compose = (...functions) => input =>
  functions.reduceRight((acc, func) => func(acc), input);
const filterUniqueWords = compose(sortWords, filterUnique, toLowerCaseAndSplit);

const calculateAverage = arr => arr.reduce((total, value) => total + value, 0) / arr.length;
const calculateStudentAverage = student => calculateAverage(student.grades);
const calculateOverallAverage = averages => calculateAverage(averages);
const pipe = (...functions) => input =>
  functions.reduceRight((acc, func) => func(acc), input);
const getAverageGrade = pipe(
  calculateOverallAverage,
  students => students.map(calculateStudentAverage)
);

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
console.log("filterUniqueWords:");
const text = "apple Banana banana orange apple";
console.log(filterUniqueWords(text));

console.log("***********************************")
console.log("getAvarageGrade:");
const students = [
{ name: "Alice", grades: [80, 90, 95] },
{ name: "Bob", grades: [70, 85, 90] },
{ name: "Charlie", grades: [75, 80, 85] }
];
console.log(getAverageGrade(students));

