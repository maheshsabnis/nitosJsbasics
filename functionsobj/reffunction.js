let MyObject = function(){
    // this is the default scope of the type 'MyObject'
    this.power = function(x,y){
        printMessage();
        return Math.pow(x,y);
    };
    this.sortAsc = function(arr) {
        printMessage();
        return arr.sort((a,b)=>{
            return a.length - b.length; 
        });
    };
    this.getYear = function(date){
        printMessage();
        return date.getFullYear();
    }

    this.generateList=function(dataSource){
        if(dataSource === undefined || dataSource.length === 0) {
            return '<div>No Data to Generate List</div>'
        }
        let select = '<select>'
        for(let d of dataSource){
            select += `<option value="${d}">${d}</option>`;
        }

        select += '</select>';
        return select;
    }



    function printMessage(){
        console.log('I am function w/o this');
    }
};