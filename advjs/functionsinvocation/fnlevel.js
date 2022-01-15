function Meg(obj,fn){
    console.log(obj.info);
}
function dodo(){
    let info = 'sdss';
    Meg(this, function(){
        console.log('xxx');  
    }); 
}

let a = dodo();
 