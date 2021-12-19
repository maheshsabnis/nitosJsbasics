let vSet  = new Set();

vSet.add(10); // the value is accepted and key is created based on value Key:10 , value:10
vSet.add(20);
vSet.add(30);
vSet.add(40);
vSet.add(50);
vSet.add(10); // duplicate omitted Key:10 is already available
vSet.add("10"); // string

console.log(`Size of vSet = ${vSet.size}`);
console.log(`All Values = ${vSet.values()}`); // [object Set Iterator]
// entries() will return an iterator (a collection to read from start to end)
// with 'keys' and 'values'
// Key are internally created based on values 
for(let v of vSet.entries()) {
    console.log('====================================');
    console.log(`Key = ${v[0]} and Value = ${v[1]}`);
    console.log('====================================');
}
console.log(`Check if 80 is available = ${vSet.has(80)}`);
// Set with Objects
let o1 = {id:1,name:'A'};
let o2 = {id:2,name:'B'};
let o3 = {id:3,name:'C'};
let o4 = {id:4,name:'D'};
let oSet = new Set();
oSet.add(o1);
oSet.add(o2);
oSet.add(o3);
oSet.add(o4);
oSet.add(o1); // duplicate
oSet.add({id:1,name:'A'}); // Although values same as the o1, it is separate object 
console.log(`Size of oSet = ${oSet.size}`);
o1.id = 10; o1.name = 'E';
oSet.add(o1); // since o1 is already added in Set this will be omitted 
console.log(`Size of oSet after o1 is modified = ${oSet.size}`);
let o5 = o1;
oSet.add(o5); // Since o1 and o5 are pointing to same location, they are same and hence o5 will not be added into Set
console.log(`Size of oSet after o1 is assigned to o5 = ${oSet.size}`);
o1 = undefined; // overwriting the o1
console.log(`Size of oSet after o1 is set to undefined = ${oSet.size}`);
o1 = null; // killing the object o1
console.log(`Size of oSet after o1 is set to null = ${oSet.size}`);


