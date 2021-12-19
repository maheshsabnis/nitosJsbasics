class MyClass {
    add1(a,b){
        console.log('2 Parameters');
        console.log(`Length of Parameters = ${arguments.length}`);
        return a +b;
    }

    add(a,b,c) {
        console.log('3 Parameters');
        console.log(`Length of Parameters = ${arguments.length}`);
        return a + b + c;
    }

    getSum(values){
        let sum = 0;
        if(values.length > 0) {
            values.forEach((v,id)=>{
                sum+= v;
            });
        }
        return sum;
    }

    // using spread for dynamic number of arguments to a method
    getSumSpread(...values){
        let sum = 0;
        if(values.length > 0) {
            values.forEach((v,id)=>{
                sum+= v;
            });
        }
        return sum;
    }


}

let obj = new MyClass();
console.log(`Add 2 =  ${obj.add1(2,3)}` ); // NaN
console.log(`Add 3 =  ${obj.add(2,3,4)}` );
console.log(`2 Parameters = ${obj.getSum([1,2])}`); // 1 Parameter of Array Type
console.log(`3 Parameters = ${obj.getSum([1,2,3])}`); // 1 Parameter of Array Type
console.log(`4 Parameters = ${obj.getSum([1,2,3,4])}`); // 1 Parameter of Array Type
console.log(`5 Parameters = ${obj.getSum([1,2,3,4,5])}`);// 1 Parameter of Array Type

console.log(`2 Parameters = ${obj.getSumSpread(1,2)}`);
console.log(`3 Parameters = ${obj.getSumSpread(1,2,3)}`);
console.log(`4 Parameters = ${obj.getSumSpread(1,2,3,4)}`);
console.log(`5 Parameters = ${obj.getSumSpread(1,2,3,4,5)}`);
console.log(`6 Parameters = ${obj.getSumSpread(1,2,3,4,5,6)}`);