let objLit = {}; // Empty Object
// Add Members to Object
objLit.strName = 'Mahesh'; 

console.log('====================================');
console.log(`${JSON.stringify(objLit)}`);
console.log('====================================');

objLit.reverse = function(){
    return this.strName;
};


console.log('====================================');
console.log(`${JSON.stringify(objLit)}`);
console.log('====================================');

let objLit1 = objLit;

console.log(`Reverse = ${objLit1.reverse()}`);

objLit1.upper = function(){
    return this.strName.toUpperCase();
}

console.log(`Upper = ${objLit1.upper()}`);

console.log(`Upper with objLit = ${objLit.upper()}`);


