let emp1 = {
    EmpNo: 'Emp-101',
    EmpName: 'Mahesh',
    DeptName: 'IT'
}; 

let emp2 = {
    EmpNo: 'Emp-102',
    EmpName: 'Tejas',
    DeptName: 'SL'
};


let Employee = {
    // Function Context will use 'arguments' array for salary and experience
    // Although the EmpNo, EmpName, DeptName are not declared before use
    // The 'this' scope of function context is declaring it at parsing time
    // and setting it as undefined 
    getInfo:function(salary, experience){
        console.log(`Details are
            EmpNo : ${this.EmpNo}, EmpName: ${this.EmpName}, DeptName: ${this.DeptName}, 
            Salary: ${salary}, Experience: ${experience}`);
    }   
};
// The call() method will access The getInfo() for emp1 object by
// substituting itself for Employee object
 Employee.getInfo.call(emp1);
 Employee.getInfo.call(emp2);
 // Using the Parameter passing
 Employee.getInfo.call(emp1, 10000, 24);
 Employee.getInfo.call(emp2, 20000, 30);

 // Using Apply, pass the arguments as an array

 Employee.getInfo.apply(emp1, [10000, 24]);
 Employee.getInfo.apply(emp2, [20000, 30]);




