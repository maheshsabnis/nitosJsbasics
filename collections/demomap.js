let oMap = new Map();
oMap.set(1, 'Sean Connery');
oMap.set(2, 'George Luznaby');
oMap.set(3, 'Roger Moore');
oMap.set(4, 'Trimothy Dalton');
oMap.set(5, 'Pierce Brosnan');
oMap.set(6, 'Daniel Craig');
oMap.set(6, 'David Nivone'); // Repetation of Key the earlier Key will be overwritten by new one

console.log(`Size of oMap = ${oMap.size}`);

oMap.forEach((v,i)=>{
    console.log(`Key = ${i} and value= ${v}`);
});

let empMap = new Map();
empMap.set('IT', [{EmpNo:1,EmpName:'A'},{EmpNo:2,EmpName:'B'}]);
empMap.set('HR', [{EmpNo:3,EmpName:'D'},{EmpNo:4,EmpName:'C'}]);
empMap.set('SL', [{EmpNo:5,EmpName:'E'},{EmpNo:6,EmpName:'F'}]);

empMap.forEach((v,i)=>{
    console.log(`Key = ${i} and value= ${JSON.stringify(v)}`);
});

console.log(`Employess of IT = ${JSON.stringify(empMap.get('IT'))}`);

empMap.delete('SL'); // delete all entries for key as 'SL'
empMap.forEach((v,i)=>{
    console.log(`Key = ${i} and value= ${JSON.stringify(v)}`);
});