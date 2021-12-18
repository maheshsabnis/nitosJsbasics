let names = ['Mahesh', 'Tejas', 'Ajit', 'Amit', 'Abhay', 'Nandu', 'Avinash', 'Anil', 'Shyam', 'Abhishek', 'Mukesh', 'Vivek', 'Satish', 'Sandeep', 'Vinay', 'Jaywant'];

let r1 = names.forEach((v,i)=>{
    if(v.length >= 7){
        v = v.toUpperCase();
        console.log(`Upper Case in forEach is = ${v}`);
    }
});

console.log('====================================');
console.log(`Original Array is = ${names} `);
console.log(`Modified Array is = ${r1} `);
console.log('====================================');
// using map()
let r2 = names.map((v,i)=>{
    if(v.length >= 7){
        v = v.toUpperCase();
        return v;
    }
});

console.log('====================================');
console.log(`Original Array is = ${names} `);
console.log(`Modified Array is = ${r2} and length of r2 is ${r2.length}`);
console.log('====================================');
// using filter()
let r3 = names.filter((v,i)=>{
    if(v.length >= 7){
        return v;
    }
});

console.log('====================================');
console.log(`Original Array is = ${names} `);
console.log(`Modified Array is = ${r3} and length of r3 is ${r3.length}`);
console.log('====================================');

 