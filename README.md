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
                -                                