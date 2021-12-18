let numbers = [10,20,30,40];
// lets push data in array
numbers.push(50);

printArrayForOf();
console.log(`Poped value =s ${numbers.pop()}`); // remove last record i.e. 50
printArrayForOf();

// remove a new value at the first position

numbers.shift(); // remove 10
console.log('--------------------------');
printArrayForOf();

numbers.unshift(10); // add 10 at first position 
console.log('--------------------------');
printArrayForOf();

// replace an element at specific position

numbers[3] = 400;
console.log('--------------------------');
printArrayForOf();


function printArray(){
    // the length is evaluated by using the in-memory iteration of array 
    for(let i=0; i< numbers.length; i++) {
        console.log(`Value at ${i}th position is = ${numbers[i]}`);
    }
}

function printArrayForIn(){
    // for..in is a simplification of for..loop
    // internal evaluation of the length for iteration 
    for(let i in numbers){
        console.log(`Value at ${i}th position is = ${numbers[i]}`);
    } 
}

// the for..of loop
function printArrayForOf(){
    for(let n of numbers) {
        console.log(`Record is = ${n}`);
    }
}

