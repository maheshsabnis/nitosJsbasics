let o = {}; // infinitely extended object with various keys in it

o.p1=10;
o.p2=20;

console.log(JSON.stringify(Object.keys(o)));
console.log(JSON.stringify(Object.values(o)));