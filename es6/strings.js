let firstName = 'Tejas';
let middleName = 'Mahesh';
let lastName = 'Sabnis';

// ES Basics to ES 5 Concatenation aka Traditional Concatenation

let fullName = firstName + '\n ' + middleName + '\n ' + lastName; // 5 String Objects
console.log(fullName);  

// ES 6 Concatenation aka Template String aka Interpolation

// Single Immutable String Object having Expressions in it
// `${EXPRESSION}`

let fullNameES6 = `${firstName}  ${middleName}  ${lastName}`;  // 3 String Object

console.log(`Full Name = ${fullNameES6}`);
// ${3+2} will internally invoke JavaScript 'eval()' function
// to evaluate or execute the expression
console.log(`Add = ${3+2}`);

console.log(`Upper Case ${fullNameES6.toUpperCase()}`);
console.log(`Lower Case ${fullNameES6.toLowerCase()}`);

// if 'a' is found then its 0-based index will be returned else -1 will be returned
console.log(`First Occurrence of 'a' in string ${fullNameES6.indexOf('a')}`);
// start searching the 'a' from 0-based 6th position 
console.log(`Last Occurrence of 'a' in string ${fullNameES6.lastIndexOf('a',6)}`);
// The ES 6 string method to search
// Position of 'esh'
// The 'search()' does not accept second parameter 
console.log(`${fullNameES6.search('esh')}`);
// ES 6 string match based on Regular Expression
let sourceText = 'The rain in Aasam is more quantity than Maharashtra';
// search based on regular expression
// a alphabet in lowercase to search for 'ain' in string /g
// The mathc() will return the string from the Source String
// based on regular expression passed to it else it will return null
console.log(`Result = ${sourceText.match(/ain/g)}`);
