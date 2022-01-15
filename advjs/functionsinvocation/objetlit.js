// Function Execution Context
// 1. Function Environment
    // -- The function's context is set with 'arguments' and its internal scope
        // --> Arguments will be checked and their values will be accepted
        // --> The Function Body execution
            // --> If there are Inner function, then their execution context will be set
// 2. The 'this' scope
    // --> JS Context will verify the declaring scope for the identifier
// 3. Outer Environment 
    // --> The Caller of the function
let emp1 = {
    EmpNo: 'Emp-101',
    EmpName: 'Mahesh',
    DeptName: 'IT',
    getInfo:function(){
        console.log(`${this.EmpNo} ${this.EmpName} ${this.DeptName}` );
        let x = function(){
            console.log('Inner X');
        }
        x(); // invocation of inner function will takes place
    }
}; 

let emp2 = {
    EmpNo: 'Emp-102',
    EmpName: 'Tejas',
    DeptName: 'SL',
    getInfo:function(){
        console.log(`${this.EmpNo} ${this.EmpName} ${this.DeptName}` );
    }
}; 

console.log(emp1 == emp2);
console.log(emp1 === emp2);

emp1.getInfo();

// external Environment Function 
function printInfo(emp) {
    console.log(`${emp.EmpNo} ${emp.EmpName} ${emp.DeptName}` );
}
printInfo(emp1);
printInfo(emp2);
printInfo({})
