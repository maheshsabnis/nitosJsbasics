class SimpleClass {

    // define private members
    #privateX = 0;

    constructor(){
        // declare public members
        this.a = 10;
        this.b = 20;
        this.#privateX = 100;
    }

    // public method
    printMembers(){
        console.log(`a = ${this.a} and b = ${this.b} and private member = ${this.#privateX}`);
        this.#privateMethod();
    }

    // private methods
    #privateMethod(){
        console.log(`I am a private method`);
    }


    // get and set properties
    // set value for the private member of the class
    set X(val) {
        this.#privateX = val;
    } 

    // read and return value of private member of the class
    get X(){
        return this.#privateX;
    }
}

let obj = new SimpleClass();
obj.printMembers();
obj.X = 9000;
console.log('====================================');
console.log(`X = ${obj.X}`);
console.log('====================================');
 

