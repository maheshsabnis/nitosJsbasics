function getProductsNoPromise(){
    console.log('In Method');

        let products = [];
        let http = new XMLHttpRequest();

        // subscribe to the Success and Error
        http.onload = function(){
            products = http.response;
            // Successful Execution
            console.log(`In Method ${http.response}`);
        };


        http.onerror = function(){
            // Failed Execution
            reject('Error Occurred');
        }


        // Open the HTTP Request to REST API
        // setting async as false is forceful Synchronous operation 
        http.open('GET','https://apiapptrainingnewapp.azurewebsites.net/api/Products', false);
        // send the request
        http.send();
console.log('exiting');
   return products;
}; 


function getProducts(){
    // logic for async operations based on Promise
    return new Promise((resolve,rejected)=>{
        let http = new XMLHttpRequest();

        // subscribe to the Success and Error
        http.onload = function(){
            // Successful Execution
            resolve(http.response);
        };


        http.onerror = function(){
            // Failed Execution
            reject('Error Occurred');
        }


        // Open the HTTP Request to REST API
        http.open('GET','https://apiapptrainingnewapp.azurewebsites.net/api/Products');
        // send the request
        http.send();

    });
}; 


function postProduct(prd){
    // logic for async operations based on Promise
    return new Promise((resolve,rejected)=>{
        let http = new XMLHttpRequest();

        // subscribe to the Success and Error
        http.onload = function(){
            // Successful Execution
            resolve(http.response);
        };


        http.onerror = function(){
            // Failed Execution
            reject('Error Occurred');
        }


        // Open the HTTP Request to REST API
        http.open('POST','https://apiapptrainingnewapp.azurewebsites.net/api/Products');
        // set the MIME Type Headers
        http.setRequestHeader('Content-Type', 'application/json');
        // send the request
        http.send(JSON.stringify(prd));

    });
}; 