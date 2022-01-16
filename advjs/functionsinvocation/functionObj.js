function MyObject(){
    let mycounter = 100; // Local Variable
    // mycounter++; // Process

    // lets write an inner function

    function increment(){
        let v = ++mycounter; // access the local variable of outer function
        console.log(`In Inner function v =${v}`);
        return v;
    }

  //  let counter = mycounter; // counter as other local variable
   let counter = increment(); // access the inner function
    return counter;
}

// console.log(`First call to MyObject = ${MyObject()}`); // 101
// console.log(`Second call to MyObject = ${MyObject()}`); // 101
// console.log(`Third call to MyObject = ${MyObject()}`); // 101


function OuterFunction(){
    let outerVariable = 500; // local variable with initial value (execute 1)

    // a nested inner function
    // a Closure (having an access of the surrounding state aka lexical environment)
    function InnerFunction(){
        console.log(`Inside the inner function the outerVarible before modification
          = ${outerVariable}`); // (execute 3)
        // modify the outer variable
        outerVariable = outerVariable + 600; // (Result is 2000)
    //     if(outerVariable === 2000)  throw new Error('invalid');
        let xInner =  outerVariable;
        console.log(`Inside the inner function the outerVarible = ${outerVariable}`);
        return  xInner;
    }   
    // modify the outer variable
    outerVariable = outerVariable + 900; // (execute 2)
    console.log(`Returning the outer function is = ${outerVariable}`);
    // Formation of closure because the InnerFunction is made accessible
    return InnerFunction; // return the inner function (execute 4) 
}

// return the outer function
let result = OuterFunction();
let res = result(); // calling the Outerfunction the returns an InnerFunction
console.log(`From inner  = ${res}`);
console.log('ddddd');