let closureModule = (function () {
    let globalVal = 1000;
  // local private function as closure
  let fnPrivate = function () {
    console.log("I am Private Inner function");
  };

  // nested closure
  // this closure will have an access of the latest value of the  globalVal
  let processValues = function(x) {
      // globalVal will be accessed as 2000
     return function(y){
         return (x + y ) * globalVal; 
     };
  }

  // latest updated value
  globalVal = globalVal * 2; // 2000

  return {
    fnPublic: function () {
        fnPrivate();
    },
    process: processValues 
  };
})();

closureModule.fnPublic();
let r1 = closureModule.process(10); // x as a input parameter will be 10
console.log( r1(3)); // y will be 3 --> 26000
let r2 = closureModule.process(10); // x as a input parameter will be 10
console.log( r1(4)); // y will be 4 --> 28000