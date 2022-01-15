// create an IIFE that will set the scope for 
// data members and member function within boundaries of function
// so that they wil not be directly accessible   
// (THE BEST USE of ref function)

// the IIF is storing reference in the 'module' variable
var module = (function(){
    var x = 100; // the 'var' is function scope available only in the contained module

    y =0 ;  // no declaration
    function first(){
        console.log('====================================');
        console.log(`In First  x = ${x}`);
        console.log('====================================');
        x++;
    }

    function second(){
        console.log('====================================');
        console.log(`In Second  x = ${x}`);
        console.log('====================================');
        x++;
    }

    
    // to expose selected types (aak functions) from the module 
    // perform following
    // get the module instance
    // return types from the module
    return {
        fnFirst:first,
        fnSecond:second
    };
})();

 
