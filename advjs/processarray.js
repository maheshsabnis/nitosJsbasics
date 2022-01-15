// a simple use of Array.reduce()

let values  = [10,20,30,40,50,60,70,80,90];

// Let's calculate the SUM of records from the array
// prev: The Result of the Previous Iteration, initial value is undefined when reduce() start executing
// current: The current value from an array that is to be processed
// index: The current position that will be helping the 'current' value to reach to end
// val: The Reference of an array that is being processed based on change in the 'current'

// CASE 1: The Sum of all records in array
let sumRec = values.reduce((prev,current, index, val)=>{
   // console.log(`prev =${prev}, current=${current}, idex = ${index}, val=${val}`);
    return prev + current;
});

//console.log(`Using Array.reduce() for calculating sum = ${sumRec}`);

// CASE 2: Lets find a frequency of the record an Array

let characters = ['A', 'B', 'C', 'D', 'D', 'C', 'E', 'F', 'A', 'A', 'B', 'D', 'F', 'E', 'H', 'A', 'B', 'C', 'E', 'D','H'];

// Lets reduce the array with matching value with 'current' element

let frequency = characters.reduce((prev,current)=>{
   // console.log(`prev =${JSON.stringify(prev)}, current=${current}`);
    if(current in prev){
         prev[current]++; // if the record match found then increase the counter by one
       //  console.log(`In if True ${JSON.stringify(prev)}`); 
    } else {
        prev[current] = 1; // there is no repetation of record 
    }
    return prev;
}, {}); // the initial value of the prev (the resultant) is empty object

//console.log(`Frequence of Each Record in Array = ${JSON.stringify(frequency)}`);


// CASE 3: Lets get group of records from the array using Array.reduce()
let products = [
    {ProductId:101, ProductName: 'Laptop', CategoryName:'ECT'},
    {ProductId:102, ProductName: 'Iron', CategoryName:'ECL'},
    {ProductId:103, ProductName: 'HDD', CategoryName:'ECT'},
    {ProductId:104, ProductName: 'Mixer', CategoryName:'ECL'},
    {ProductId:105, ProductName: 'Router', CategoryName:'ECT'},
    {ProductId:106, ProductName: 'Solder', CategoryName:'ECL'},
    {ProductId:107, ProductName: 'Laptop', CategoryName:'FOD'},
    {ProductId:108, ProductName: 'Iron', CategoryName:'FAS'},
    {ProductId:109, ProductName: 'HDD', CategoryName:'FOD'},
    {ProductId:110, ProductName: 'Mixer', CategoryName:'ECL'},
    {ProductId:111, ProductName: 'Router', CategoryName:'ECT'},
    {ProductId:112, ProductName: 'Solder', CategoryName:'FOD'}
];

// BAsed on the property-name the records array will be providing
// grouping
// 1. Iterate over each record from records 
// 2. match the property value 
// 3. Add the match in group 
function createGroupByCatName(records, property){
    // groupResult (previous): is the group that will be generated 
    // record (current): this will be iterated to check the match based in 'property' value
    let result = records.reduce((groupResult, record)=>{
     //   console.log(`Current State of result = ${JSON.stringify(groupResult)} The Current Record is = ${JSON.stringify(record)}`);    
         // read the value of the current record based on property (CategoryName) 
         // and value will be ECT, ECL, FOD, FAS, etc.
         let key = record[property];
       //  console.log(`The  key of the current record is = ${key}`);
        
        // check for repetation of the record based on the 'key' and add it in the 
        // groupResult, if there is no key found or the property itself is not present
        // in the record then the group will be empty
        if(!groupResult[key]) {
            groupResult[key] = []; // there will br no records in the group
        }  
        // otherwise add record in the group
        groupResult[key].push(record);
      //  console.log(`The Match Found and the Current State of the group is = ${JSON.stringify(groupResult)}`);

        return groupResult;
    }, {});

    return result;
}

let groups = createGroupByCatName(products, 'CategoryName');
console.log(`Group = ${JSON.stringify(groups)}`);




