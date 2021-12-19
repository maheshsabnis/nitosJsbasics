# Programming with JavaScript and ES 6

- Variable declaration
    - The 'var' keyword
    - the default Function Scope or Module Scope Declaration
        - Accessible through the function and module in which it is declared
    - Can store 'any-type-of-data' in it
- The 'object' is a complex type of JavaScript that includes
    - number
    - string
    - boolean
    - Date
    - Array
    - Object aka {}
    - Function        
- Object contains 'properties' and 'methods 
    - The JSON object aka {} can be dynamically enhanced by adding new Key:Value pairs in it
# ES 6
- Language Specification    
    - High Level JavaScript aka Modern JavaScript
        - Mainly used in React.js Development
        - Node.js
        - Vue.js
        - Ember.js      
    - TypeScript, language by Microsoft purely based on ES 6
        - Foundation for Angular Dev.
        - Can be used for React
    - Dart
        - Mainly used for Web Components for Mobile Apps    
- ES 6 is a specification and not a Formal-Library
    - ES 6 ---> ES 2015 Object Model (Code-Base)
    - ES 7 ---> ES 2016
    - ES 8 ---> ES 2017 (Breaking changes in ES 6 for Asynchronous Programming)         
    - ES 9 ---> ES 2018 (Generators)
    - ES 10 ---> ES 2019
    - ES 11 ---> ES 2020
    - ES Next
    
- ES 6 Programming Specifications
    - The Variable Declaration Scope using 'let' keyword
    - DataTypes
        - Currently Only Supported by TypeScript Explicitly
    - String Modifications
        - Interpolation aka Template String
        - String Object Methods for String Manipulations
    - Data Structure Modification
        - Array Modification
        - Set and WeakSet
        - Map and WeakMap 
    - Iteration using for..of loop
    - Arrow Operator
    - Object Mutability (building an immortal object) using 'rest parameters' (DO NOT CONFUSE WITH REST API)  
        - aka Variable number of parameters to a method
        - ENhancing ann existing Object with new Properties and function in it
    - Promises for Asynchronous Programming
    - Proxies
    - Object Oriented Programming          
# ES 6 Project Configuration
    - The Transpiler
        - ES 6 Code ----> Babel Transpiler ---> ES 3 / ES 5 Browser Compatible JavaScript Code
    - Create a package.json file
        - The JS Project Configuration file that contains list of all 'production dependencies' and 'test and development dependencies' for writing the code
            - Install Node.js
                - This will provide the 'npm' command line utility     
            - Execute the following command to create 'package.json'
                - npm init
                    - The Command Line Wizard to create package.json
                - npm init -y OR npm init -f
                    - Create package.json file with defaults
            - package.json file
                - The 'scripts'
                    - The scripts object for the Commands to build, test and run the project
                        - npm run test
                            - Run Test Scripts
                        - npm run start
                            - Execute the current project
                - The 'dependencies'
                    - Section that contains List of Standard Node Package dependencies those are used to RUN the Project
                        - npm install --save [PACKAGE-NAME]
                - The 'devDependencies'
                    - Section that contains list of packages those are used to build and test project
                        - npm install --save-dev [PACKAGE-NAME]                                         
        - Packages for Transpiling ES 6
            - @babel/core
                - The Transpiler
            - @babel/cli
                - The Command Line Tool Package that will be sued to transpile the ES 6 to ES 5/ES 3
            - @babel/polyfill
                - Bridge Object Model that will execute 'SOME-ES6-CODE' as it is in browser without generating transpiled code
            - @babel/preset-env and @babel/preset-stage-0
                - Packages those are responsible to transpile the Browser Compatible  Code that can be used across all browser (Desktop and Devices)
                - These will be used by React/ Vue / Angular etc. for integrating their code with Developer Defined ES 6 code   
            - babel-preset-es2015
                - ES 6 to ES 5 and ES 3 (IE 8,9, Chrome v-4, FireFox V-4) Support in browser    
        - npm install -g  @babel/core @babel/cli
                - Install in Global Scope to access the CLI
        - npm install --save-dev @babel/core @babel/cli @babel/polyfill @babel/preset-env @babel/preset-stage-0 babel-preset-es2015
    - Transpiling the code 
        - babel [SOURCE-FILE-PATH].js -o [OUTPUT-FILE-PATH].js
        - In the Project  add a '.babelrc' file
            - Babel Resource Configuration File, that will use the env preset for transpilation
# Programming with ES 6
1. The 'let' keyword
2. The String Object and its methods
    - Standard String methods (ES x, where x is Basic JS, 3,5,6,7,8,9....)
        - toUpperCase(), toLowerCase()
        - slice(), substr(), concat()
        - indexOf(), lastIndexOf(),
    - ES 6 Methods (Needs Transpiler)
        - search()
        - Template String or String Interpolation
        - `${EXPRESSION}`
            - EXPRESSION will be parsed as JS Object
            - This could Be string, Numerically Evaluated Expression
            - HTML
3. The Array
    - The Most powerful Data Structure in JS 
    - Array Iterations
        - for..loop (Standard JS)
        - for..in loop (ES 3)
        - for..of loop (EG 6 Iterator)
            - This will start iterating from the first-index of the collection and iterate to the end-index by returning each record from the collection    
                - Internally uses 'Symbol.iterator()'
    - The 'length' is a property of array that return count of records in array    
    - Array Data Manipulation methods
        - push(), add in the last
        - pop(), remove from the last
        - shift(), remove from the first 
        - unshift(), add on the first position
    - Array Data Rearrangement Methods
        - sort(), reverse() (ES 6 method)
    - Array Data Extraction Methods
        - forEach()
            - Does not return any data 
        - filter()
            - Return a new array based in conditional logic evaluated on source array
        - map()
            - Can Manipulate array records and returns the array with modification
        - find()
        - indexof()
        - lastIndexOf()   
    - Array Modification methods
        - slice()
        - splice()
        - concat()        
    - Array Analysis method
        - reduce()
    - let arr = []; arr = [[],[],[]]; [[[]], [], [[], [[],[],[[],[]]]]]
4. ES 6 Arrow Operator
    - If the function accepts Callback function as input parameter, then instead of using callback function we can use array operator as input parameter
        - Syntax
            - doWork(function(x,y){.....}); will be replaced by
            - doWork((x,y)=>{.....})    
5. JSON Object Facts in JS
    - let obj = {K:V,K:V};
    - Managing Object Equality
    - Comparing Objects based upon Values and Types
    - Object Methods
        - Object.assign()
            - Create a new object at different location 
            - e.g. let o2 = Object.assign({},o1);
                - A new blank object is created at new location and the data from o1 is copied into it
        - Object.create()
            - Clone a new object based on Source object
            - Recommended in Object Creational Pattern  
            - E.g.
                let o2 = Object.create(o1);
        - Listing all keys/ properties of object
            - Object.keys()
        - LListing values of each property of the object
            - Object.values();                     
6. JavaScript Modularity
    - An Approach of defining Single-Responsibility Cohesive Layer (or object) in JS Application
    - Implemented using Various Methodologies
        - JS Function Approach
            - Use Function as a 'Class'
                - Public and Private Declaration
            - In JS, the function is an object, that is a 'type', thats why it can be used for defining an OBJECT as a reusable set of functionality    
                - Like Class
                - The JS 'this' scope object
                    The 'this' keyword sets the scope for 'content' of the function for 'public-access' 
            - 3 Approaches for Function Object
                - The Identifier storing the function in it, aka Ref. Function
                    - syntax
                        - let x = function(parameters){this.fn=function(){.....}};
                            - x is the function object that has a 'constructor function' as function(parameters) and also has publicly exposed scope function as 'f1'   
                    - The Ref.Function Prototype
                        - The Function object contains the 'prototype' property that us used to extend the Ref. Function by adding new logic in it
                            - LIKE Inheritance Concept of OOPs 

                - A Close Type JS Function aka function that returns a Object Literal (aka JSON object with Key/Value pair) for public access   
                    - Syntax
                        - function MyFucntionObject(parameters){
                            return {
                                Key1:value,
                                Key2:value,
                                ....    
                            };
                        }     
                        - The Key1 and Kye2, etc, are the publicly exposed members   
                - Immediately Invoked Function Expression (IIFE)
                    - Highest priority JS function definition, that will be executed immediately when the Browser is loaded
                    - Syntax
                        - (function(){.........})();
                            - First Parenthesis represent the Function Object
                            - Second Parenthesis represents the Invocation
                            - No Separate Instance is needed to invoke
                    - This is a PURE JS Module in Large scale JS Applications                           
        - ES 6 Classes    
            - Class
                - The 'class' as a Keyword, that will mapped with function Object
                    - The 'constructor()' is a standard function
                    - No-constructor overloading allowed
                - Access Specifiers
                    - The default access for methods and properties will be 'public' (No Keyword) 
                    - Data members will be having 'this.' as prefix for public declaration  
                    - Use '#' based declarations for 'private' (No-Keyword)
                        - Babel Plugins for Private Members and Class Properties
                            - @babel/plugin-proposol-private-methods
                                - Private Members
                            - @babel/plugin-proposol-class-properties
                                - get/set proeprties
                        - @babel/core 7.0+ the PlugIns for Private Members and Class get/set properties is by default supported          
                - Access Modifiers
                    - The 'static' keyword for Static Declaration of methods
                - What about Abstract Class?
                    - The 'new' nmonikar of JS is used to check the 'target' class to be instantiated
                        - The 'new' is an object tha has the 'target' property
                        - Using the 'target' property we can verify the class being instantiated and if the class to be made as as abstract, then use 'new.target' to prevent the instantiation  
                            - if(new.target === MyClass) { throw exception} 
                            - let obj = new MyClass(); this statement will call the if condition   
            - Inheritance    
                - The 'extends' keyword
            - No Overloading Officially available
                - Use dynamic parameters to a method for Overloading like experience
                - The JS uses 'arguments' array, this is a default array that represents length and values of parameters passed to method
                - Use ES 6 'rest parameters'
                    - This is an internal mutation for the default 'arguments' array by passing variable number of parameters to a method
                        - syntax:
                            function doWork(...values){....}
                                - the 'values' object (internally an arguments array) will be changed based on the number of parameters passed to 'doWork' method
                                - The '...' is known as 'Object Spread', means modifying the same object by adding new properties and/or data in it
                - bind() and apply()
            - No Overriding Supported
            - In Inheritance 'Up-Casting' and 'Down-Casting' is not allowed        
7. JS for Professional Application Development
    - Use a Powerful Collection to store data
        - Array
        - Set
            - a collection that is used to store unique values
            - Recommended when the data is primitive type e.g. Number, String, etc.
            - The 'Set' is a Type
                - Methods
                    - add(), delete(), has(), clear(), values(), forEach(), -etc.
                - Property 
                    - size    
        - WeakSet
            - It is collection of Object References
            - It Stores Object's references only and not any other types
            - If the Object is Killed, its reference will be removed from WeakSet
            - Recommended in case of preventing any possible memory leaks in JS application             
        - Map
            - Used to store data in Key:Value pair
            - A Key is primitive type and value can be Array, JSON object, complex type
            - Recommended to store large amount of data in Browser's application memory 
            - The 'Map' is a type
                - Methods
                    - set(), get(), has()
                    - entries()
                - Property
                    - size    
    - Define a strategy for Calling externally hosted services
        - XmlHttpRequest object for receiving Data from External Services
        - An AJAX object
            - open('HTTP-METHOD', 'REMOTE-URL', 'USERNAME', 'PASSSWORD', 'ISASYNC');
                - HTTP-METHOD: GET,POST,PUT,DELETE
                - ISASYNC: Default is 'true' for Asynchronous calls, we cam make it false for Sync Calls (Not Recommended)
            - setRequestHeader()
                - Add HTTP headers in Out-going request
                    - e.g. Content-Type, Authorization, Version, etc.
            - send()
                - Send the request
                - USed in case of POST and PUT request
            - onload
                - Success Callback for successful execution
            - onerror
                - if call fails                      

    - Protect The class with its properties from direct access from the consumer             

