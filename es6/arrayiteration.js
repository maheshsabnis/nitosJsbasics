let names = ['Mahesh', 'Tejas', 'Ajit', 'Amit', 'Abhay', 'Nandu', 'Avinash', 'Anil', 'Shyam', 'Anhishek', 'Mukesh', 'Vivek', 'Satish', 'Sandeep', 'Vinay', 'Jaywant'];

// the function that accepts 2 parameters
function showNames(val,index){
    console.log(`Value at index ${index} is  = ${val}`);
}

// Use forEach() method of the Array iterate over all data from array
// the Callback function 'showNames' is passed as input parameter (Explicitly Defined Callback function)
// the showNames will be 'Higher-Order-Function' (Means it will be executed with highest precedence)
names.forEach(showNames);

// USing Anonymous callback function, 
console.log('====================================');
names.forEach(function(val,index){
    console.log(`Value at index ${index} is  = ${val}`);
});
console.log('====================================');
// Use the Arrow Operator
names.forEach((val,index)=>{
    console.log(`Value at index ${index} is  = ${val}`);
});
console.log('================MAP====================');
names.map((val,index)=>{
    console.log(`Value at index ${index} is  = ${val}`);
});