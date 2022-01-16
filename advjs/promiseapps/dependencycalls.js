 function getCategories(){
     let response = fetch('http://localhost:9090/api/categories', {
         method: 'GET'
     });

     return response;
 }

 function getProducts(){
    let response = fetch('http://localhost:9091/api/products', {
        method: 'GET'
    });

    return response;
}


// using Parallel Calls
function parallelPromise(){
    let catPromise = getCategories();
    let prdPromise = getProducts();

    // Resolve all Promises at a time to read responses 
    Promise.all([catPromise,prdPromise])
            // resolve all promised at at time
        .then((responses)=>{
             return Promise.all(responses.map((response)=>{
                 return response.json();
             })).then((data)=>{
                 console.log(`Result = ${JSON.stringify(data)}`);
             }).catch((error)=>{
                 console.log(`Error = ${error}`);
             });
        }); 
}



// using async await
async function getAllData(){
    let categoriesCall = await getCategories();
    let categories  = await categoriesCall.json();
    console.log(`Categories are ${JSON.stringify(categories)}`);
    let productsCall = await getProducts();
    let products = await productsCall.json();
    console.log(`Products are = ${JSON.stringify(products)}`);
}

 