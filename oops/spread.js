let a_obj = {x:10};
console.log(JSON.stringify(a_obj));
a_obj = {...a_obj, y:20};  // spreading the a_obj with additional literals in it
console.log(JSON.stringify(a_obj));

let arr= [10,20,30];
console.log(arr);
arr = [...arr, 40,50,60];
console.log(arr);  