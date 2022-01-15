// create a function object with function constructor
function Person(id, name, age){
    this.Id = id;
    this.Name = name;
    this.Age = age;

    this.getDetails = function(){
        console.log('====================================');
        console.log(`Id = ${this.Id} Name = ${this.Name} Age = ${this.Age}`);
        console.log('====================================');
    }
}

// define an instance 
let person1 = new Person(101, 'Mahesh', 46);

person1.getDetails();

// create an another instance using the deep copy
let person2 = Object.create(person1);
person2.getDetails();
person2.Id = 102;
person2.Name = "Neeta";
person2.Age = 43;
person2.getDetails();
console.log(person1 === person2);