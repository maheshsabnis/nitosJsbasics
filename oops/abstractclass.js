class AbstractClass {
    constructor(x,y){
        this.n1 = x;
        this.n2 = y;

        if(new.target === AbstractClass) {
            throw new TypeError('This class can not be instantiated.....');
        }
    }

    baseMethod(){
        console.log('I am a method from the base class');
    }
    power(){
        return Math.pow(this.n1,this.n2);
    }
}

// derive the class
class DerivedClass extends AbstractClass {
    constructor(a,b){
        super(a,b);  // access the base class constructor()
    }

    deriveMethod(){
        console.log('I am a method from the derived class');
    }
}

let obj = new DerivedClass(5,10);
obj.baseMethod(); // access the method from the base class
console.log(`Power = ${obj.power()}`);
obj.deriveMethod();

// force fully try to create an instance of the Abstract class
let obj1 = new AbstractClass(300,400);