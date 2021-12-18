"use strict";

// JSON Object Array
var Employees = [{
  EmpNo: 101,
  EmpName: 'A',
  Salary: 12222,
  DeptName: 'D1'
}, {
  EmpNo: 102,
  EmpName: 'B',
  Salary: 22222,
  DeptName: 'D2'
}, {
  EmpNo: 103,
  EmpName: 'C',
  Salary: 32222,
  DeptName: 'D3'
}, {
  EmpNo: 104,
  EmpName: 'D',
  Salary: 42222,
  DeptName: 'D1'
}, {
  EmpNo: 105,
  EmpName: 'E',
  Salary: 52222,
  DeptName: 'D2'
}, {
  EmpNo: 106,
  EmpName: 'F',
  Salary: 62222,
  DeptName: 'D3'
}]; // print only Employees from DeptName D1

var ed1 = Employees.filter(function (e, i) {
  return e.DeptName === 'D1';
});
console.log("Result = ".concat(JSON.stringify(ed1)));
