let a = 10; // number
let b = "10"; // String

console.log(a == b); // the  == is 'Value-Comparer'

console.log('====================================');
console.log(a === b); // the  === is 'deep-equality' first check type and the value
console.log('====================================');

let o1 = {x:10};
console.log(`o1 is ${o1.x}`);
let o2 = o1; // POint to same location 
console.log(`o1 is ${o1.x} and o2 is ${o2.x}`); 
o2.x = 900; // Modifying o1.x

console.log(`After Modifying o2,x as 900 Now o1 is ${o1.x} and o2 is ${o2.x}`); 

let o3 = Object.assign({}, o2);
console.log(`o2 is ${o2.x} and o3 is ${o3.x}`); 
o3.x = 8000;
console.log(`After Modifying o3.x as 8000 Now o2 is ${o2.x} and o3 is ${o3.x}`); 
o3.y = 90000;

console.log(`All Keys of o3 are ${Object.keys(o3)}`);

console.log(`Value of each property o3 are ${Object.values(o3)}`);




