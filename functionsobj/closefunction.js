function Utilities(){
    return {
        changeCase: function(str, c){
            if(c === 'U' || c === 'u') return str.toUpperCase();
            if(c === 'L' || c === 'l') return str.toLowerCase();
            return str;
        },
        getDateDetails: function(date){
            let dateDetails = {
                year: date.getFullYear(),
                date: date.getDate(),
                month: date.getMonth()
            };

            return dateDetails;
        },
        getCeilValue:function(a,b){
            return Math.ceil(a/b);
        }
    }; 
}

let o1 = new Utilities();
let o2 = o1;

console.log(o1 === o2);
