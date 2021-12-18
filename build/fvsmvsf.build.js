"use strict";

var names = ['Mahesh', 'Tejas', 'Ajit', 'Amit', 'Abhay', 'Nandu', 'Avinash', 'Anil', 'Shyam', 'Abhishek', 'Mukesh', 'Vivek', 'Satish', 'Sandeep', 'Vinay', 'Jaywant'];
var r1 = names.forEach(function (v, i) {
  if (v.length >= 7) {
    v = v.toUpperCase();
    console.log("Upper Case in forEach is = ".concat(v));
  }
});
console.log('====================================');
console.log("Original Array is = ".concat(names, " "));
console.log("Modified Array is = ".concat(r1, " "));
console.log('===================================='); // using map()

var r2 = names.map(function (v, i) {
  if (v.length >= 7) {
    v = v.toUpperCase();
    return v;
  }
});
console.log('====================================');
console.log("Original Array is = ".concat(names, " "));
console.log("Modified Array is = ".concat(r2, " and length of r2 is ").concat(r2.length));
console.log('===================================='); // using filter()

var r3 = names.filter(function (v, i) {
  if (v.length >= 7) {
    return v;
  }
});
console.log('====================================');
console.log("Original Array is = ".concat(names, " "));
console.log("Modified Array is = ".concat(r3, " and length of r3 is ").concat(r3.length));
console.log('====================================');
