// create a function that will memorize results
// fn: will be a dynamic function that will be processing 
// complex results
// fn is the function that will be having complex logic
// of which value is to be cached
const fiboFromMemory=(fn)=>{
    // 1. define a Cache Object at the function scope
    let cacheObject = {}; 
    console.log(`Cache Objet = ${JSON.stringify(cacheObject)}`);  

    // dynamically created function
    return function(){
        // my complex logic goes here
        // cache results for repetitive results
        // 2. Read the Argument passed to the dynamic function 
        let cacheKey = arguments[0];
        // 3. if this key is already available in the cache object
        // then return data from cache
        if(cacheObject[cacheKey]){
            console.log(`If anything Cached = ${ cacheObject[cacheKey]}`);
            return cacheObject[cacheKey]; 
        }else {
            // 4. Process the data by applying the logic on the object
         //   console.log(`The Function ${fn.toString()}`);
            let latestResult = fn.apply(this, arguments);
            // 5. cache the result
            cacheObject[cacheKey] = latestResult; 
            console.log(`The Latest result = ${latestResult}`);
            // 6. return the result
            return latestResult;    
        }

    };
};




// caller of fiboFromMemory(),
// the fiboFromMemory() will be caching results
// the following anonymous function will be passed to the
//  fiboFromMemory() function in its 'fn' input parameter
let fibo = fiboFromMemory((num)=>{
    if(num === 0 || num === 1) {
        return num;
    } else {
        // execute the function recursively for calculating
        // fibonacci result  
        return fibo(num-1) + fibo(num-2);
    } 
});


console.log('Using JS Memoization');
console.log(`Fibo for 10 = ${fibo(10)}`);
console.log(`Fibo for 10 = ${fibo(10)}`);
console.log(`Fibo for 12 = ${fibo(12)}`);
console.log(`Fibo for 12 = ${fibo(12)}`);
