
 
let add = new Function('a', 'b', 'console.log(`dddddd`) ; return Math.pow(a,b); ;');
console.log(add.toString() + typeof(add));

console.log(`Add = ${add(10,20)}`);

function processData(val) {
    if(typeof(val) === 'function') {
        console.log('Do you really want to execute the function');
    }else {
        console.log(`Precess = ${val}`);
    }
}


processData(10);
processData(add);