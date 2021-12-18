"use strict";

var names = ['Mahesh', 'Tejas', 'Ajit', 'Amit', 'Abhay', 'Nandu', 'Avinash', 'Anil', 'Shyam', 'Abhishek', 'Mukesh', 'Vivek', 'Satish', 'Sandeep', 'Vinay', 'Jaywant']; // default sort is always based on alphabet

console.log('====================================');
console.log("Sort = ".concat(names.sort()));
console.log('===================================='); // sort based on length of each record in array
// internally uses binary sort

var sortResult = names.sort(function (a, b) {
  return a.length - b.length;
});
console.log('=================Length Base Sort in Ascending Order by Length===================');
console.log("Sort = ".concat(sortResult));
console.log('===================================='); // sort based on length of each record in array
// internally uses binary sort

var sortResultDesc = names.sort(function (a, b) {
  return b.length - a.length;
});
console.log('=================Length Base Sort in Descending Order by Length===================');
console.log("Sort = ".concat(sortResultDesc));
console.log('====================================');
console.log('====================================');
console.log("Reverse = ".concat(names.reverse()));
console.log('====================================');
