# Points to be noted while working with JS Code
1. Use Native Fucntions provided by Object so that the custom code can be reduced
    - Instead of writing COMPLEX-LOGIC for Data Processing for Object (Collections) check for the standard function provided by the object that satisfies requirement  
    - E.g.
        - Array provides 'reduce()' function that internally restructures the Array Data
        - Not a BAsic Array Function
        - Introduced in ES 6
        - Supported by Browser With Transpilation
    - The flat()  method of array
        - USed to Spread records of array in single 1-D array
            - Array.flat(), the ES 9/10 method
    - If Collection of Objects then make sure that the object's state management in handled by the collection
        - e.g. if the Object is modified the collection MUST receive the modification
        - If object is killed then ite MUST be removed from the collection           
    - Use the Wek References collection to store object references so that when object is modified, it will be reflected into the collection
        - WebSet()
        - WeakMap()     
2. Set the Behavior on Objects /  Collection using the Standard Features offered by JavaScript 
3. Use Functions as Modules and Re-Usable Object to avoid code-repetition  
    -  Define Modules to Scope declarations so that the variable will be available only within the MODULE 
    - Using Functions carefully
        - Make sure that the Function Scope is implemented using the Module
                - var mdl = ((function){.... return {}});
        - While defining instances of function objects or ES 6 classes use the Constrcutor Pattern using Object.create().
            - In JS Object Creational Patterns  
                - use 'new'
                - Object.assign()
                    - New Blank object is created with same schema and data in it        
        - When using nested functions handle the scope of declaration from Outer-to-inner function*** (Closure)
        - Manage the Function object creation and enhancements in it using __proto__ carefully
        - define a common function access across various objects to reduce the code repatation (VERY****)
        - If JS Objects are having identical structure, then we can attach a common functionality to it using 
            - call()
                - This will work on the 'this' scope object of the JS
                - where the Function of external object can be applied directly on the Identical JS object to access their this scope properties
                - Parameters are passed as separate arguments where the JS Function execution COntext will parse these and map with 'this' scope object
                - "Calls a method of an object, substituting another object for the current object."
            - apply()
                - Similar to call
                - PAss One single Array as argument to call so that its records can map with 'this' scope
            - bind()
                - To delegate a new function to an existing object with additional parameters
        - Implement the Overloading of functions carefully with variable number of parameters 
            - It is a mechanism using which JS Parser will decide how invoke a method and execute it based in different types of parameter
                - use the function reference using 'Function()' object of JavaScript
                    - Function() Used for creating a function at runtime
                - use the apply() to create object substitution
                - Dynamic name assignment to a function object          
4. Use Patterns While writing the Productive code
5. Declare only those object which are useful