let o1 = {id:1, name:'A'};
let o2 = {id:2, name:'B'};
let o3 = {id:3, name:'C'};
let o4 = {id:4, name:'D'};
let o5 = {id:5, name:'E'};

let arrObj = [];
arrObj.push(o1);
arrObj.push(o2);
arrObj.push(o3);
arrObj.push(o4);
arrObj.push(o5);

console.log(`Data in arrObj = ${JSON.stringify(arrObj)}`);
// Modify the property of the Existing object in array
// the Modifications are absorbed by array
o4.name="d1";
console.log(`Data in arrObj after modification o4 = ${JSON.stringify(arrObj)}`);
// a complete new Object assignment 
// a complete modification is a new object so has to be added explicitly in array 
o4 = {id:6,name:'F'};
arrObj.push(o4);
console.log(`Data in arrObj after Complete modification o4 = 
${JSON.stringify(arrObj)}`);

// lets kill o1
o1 = null;
// value of o1 will still be in the array
console.log(`Data in arrObj after killing o1 = ${JSON.stringify(arrObj)}`);
// o1.id = 100; // rebirth for o1 (throw Error because the o1 is killed)
// Rebirth of the o1 object by providing new schema and value to it
o1 = {id:100, name:'eeee'}; 
arrObj.push(o1);
console.log(`Data in arrObj after Rebirth o1 = ${JSON.stringify(arrObj)}`);


