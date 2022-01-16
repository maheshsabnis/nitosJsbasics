function chainCalls(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(1),1000);
    }).then((res1)=>{
        console.log(`First Result ${res1}`);
        return res1 * 2; // continue execution with next resolved result in chain
    }).then((res2)=>{
        console.log(`Second Result ${res2}`);
        return res2 * 2; // continue execution with next resolved result in chain
    }).then((res3)=>{
        console.log(`Third Result ${res3}`);
        return res3 * 2; // continue execution with next resolved result in chain
    }).then((res4)=>{
        console.log(`Fourth Result ${res4}`);
        // some error so break the chain
        throw new Error('Some Error Occurred so breaking the promise');
    }).catch((error)=>{
        console.log(`Error Occurred ${error}`);
    }).finally((final)=>{
        console.log(`HUSHHHHHHH ... done. ${final}`);
    });
}