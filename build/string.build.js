"use strict";

var firstName = 'Tejas';
var middleName = 'Mahesh';
var lastName = 'Sabnis'; // ES Basics to ES 5 Concatenation aka Traditional Concatenation

var fullName = firstName + '\n ' + middleName + '\n ' + lastName; // 5 String Objects

console.log(fullName); // ES 6 Concatenation aka Template String aka Interpolation
// Single Immutable String Object having Expressions in it
// `${EXPRESSION}`

var fullNameES6 = "".concat(firstName, "  ").concat(middleName, "  ").concat(lastName); // 3 String Object

console.log("Full Name = ".concat(fullNameES6)); // ${3+2} will internally invoke JavaScript 'eval()' function
// to evaluate or execute the expression

console.log("Add = ".concat(3 + 2));
console.log("Upper Case ".concat(fullNameES6.toUpperCase()));
console.log("Lower Case ".concat(fullNameES6.toLowerCase())); // if 'a' is found then its 0-based index will be returned else -1 will be returned

console.log("First Occurrence of 'a' in string ".concat(fullNameES6.indexOf('a'))); // start searching the 'a' from 0-based 6th position 

console.log("Last Occurrence of 'a' in string ".concat(fullNameES6.lastIndexOf('a', 6))); // The ES 6 string method to search
// Position of 'esh'
// The 'search()' does not accept second parameter 

console.log("".concat(fullNameES6.search('esh'))); // ES 6 string match based on Regular Expression

var sourceText = 'The rain in Aasam is more quantity than Maharashtra'; // search based on regular expression
// a alphabet in lowercase to search for 'ain' in string /g

console.log("Result = ".concat(sourceText.match(/ain1/g)));
