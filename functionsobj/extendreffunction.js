MyObject.prototype.sortDesc = function(arr){
    return arr.sort((a,b)=>{
        b.length - a.length
    });
}