// a generator function that makes an async call to the REST API

function* streamCategories(){
    while(true){
        // initiating a async call with yielding
        yield fetch('http://localhost:9090/api/categories', {
            method: 'GET'
        }).then((c)=>{
            var json = c.json();
            // return a promise
            return json;
        });
    }
} 

// creat a caller that will use the generator function
function runStream(generator){
    if(!generator){
        generator = streamCategories(); // get the generator object
    }

    // start using it
    let reader = generator.next();

    // process the read to read values
    // since the 'promise' is yielded by the generator
    // call then()
    reader.value.then((category)=>{
        if(!category) {
            // iterate and move next
            // recursive call till the promise is not resolved
            runStream(generator);
        } else {
            // once the promise resolve start processing
            console.log(`Category = ${JSON.stringify(category)}`);
        }
    });
}

runStream();

// using 'async' modifier to create async-generator in simplest way

async function* AsyncGenerator(url){
    // directly yield the promise 
    // This will yield a Resolved Promise Object
    yield fetch(url)
            .then((res)=>{
                let catJson = res.json();
                return catJson;
            }); 
}

// lets write the consumer

async function consumer(){
    let asyncGenerator = AsyncGenerator('http://localhost:9091/api/products');
    // subscribe and start processing
    // The generator Will directly read the 'json()' promise
    // from the 'yielded resolved promise' object from the generator 
    let reader = asyncGenerator.next();
    // start reading
    reader.then((cat)=>{
         console.log(`Cat = ${JSON.stringify(cat)}`);
    }).catch((error)=>{
        console.log(error);
    });
}

consumer();