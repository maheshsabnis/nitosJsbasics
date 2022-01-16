function UIGenerator(dataSource){
    console.log(`data = ${dataSource}`);
    // write a closure function that will 
    // process the datasource so that it will be
    // accessed by list
    let validateDataSource = function(){
        if(dataSource === undefined || dataSource.length === 0) {
            return false;
        } else {
            return true;
        }
    }
    function generateSelect(){
         
            let result;
            if(!validateDataSource()){
                result =  `<div>No Records to Show</div>`;
            } else {
                result = `<select>`;
                dataSource.forEach((v,i)=>{
                    result += `<option value="${v}">${v}</option>`;
                });    
                result += `</select>`;
            }

            return result;
        
    }
    return {
        list: generateSelect
    }
}