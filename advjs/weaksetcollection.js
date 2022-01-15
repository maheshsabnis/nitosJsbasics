let o1 = {id:1, name:'A'};
let o2 = {id:2, name:'B'};
let o3 = {id:3, name:'C'};
let o4 = {id:4, name:'D'};
let o5 = {id:5, name:'E'};

let ws = new WeakSet();

ws.add(o1);
ws.add(o2);
ws.add(o3);
ws.add(o4);
ws.add(o5);

console.log(`is o1 available = ${ws.has(o1)}`);
// lets kill o1
o1 = null;
// the object will be removed from the WeakSet
console.log(`is o1 available = ${ws.has(o1)}`);

// re-birth of o1
o1 = {id:90, name:'SDDDD'};
ws.add(o1);
console.log(`is o1 available = ${ws.has(o1)}`);

