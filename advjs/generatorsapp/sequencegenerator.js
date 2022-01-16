// 1. define a sequence

let numbers = [10,20,30,40,50,60,70,80,90];

// 2. Writing a Generator Function
// general parameters to custom generator
// P1: Start: Start position from which the data from collection will be read  
// P2: End: The End-position upto which the data will be read
// P3: Step: Increment from Start-to-react-to-End  
function* dataGenerator(start=0,end=Infinity, step=1){
    //  define a logic for generating a Data-Stream
    // define a local variable that will be a count for iteration
    let iterationCount = 0;
    // Iterate using a loop to generate a Data Stream based on
    // start, end and step values
    for(let i=start; i<=end;i+=step) {
        // increment the iteration count for the sequence
        console.log(`Current Iteration Count is = ${iterationCount}`);
        iterationCount++;
        console.log(`Current Sequence Record is = ${JSON.stringify(i)}`);
        // return or yield the record
        yield i;
    }
    // return the iteration count which indicated the data stream value
    // from the input sequence
    return iterationCount;    
}

let myObj = [
    {id:1, name:'A'},
    {id:2, name:'B'},
    {id:3, name:'C'},
    {id:4, name:'D'},
    {id:5, name:'E'},
    {id:6, name:'F'}
];


// 3. using the Generator Function to generate the sequence in the collection
//  Start is 10, End is 90, and step 5 is 5
// 10,15,20.....,90
let generator = dataGenerator(numbers[0], numbers[numbers.length - 1], 5);
// let generator = dataGenerator(myObj[0], myObj[myObj.length - 1], 2);
// use the generator
let streamDataReader = generator.next(); // this will verify that the Sequence is no-empty
// loop till done is true and read record
while(!streamDataReader.done) {
    // read the current value
    console.log(`The current Record value is = ${JSON.stringify(streamDataReader.value)}`);
    // move to next record
    streamDataReader = generator.next();
}    
