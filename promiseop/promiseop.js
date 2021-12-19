class HttpService {
    #url='';
     constructor(){ 
        this.#url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
     }
    getData(){
        let response = fetch({
            url: 'https://apiapptrainingnewapp.azurewebsites.net/api/Products',
            method:'GET'
        });
        return response;
    }   
}

var serv = new HttpService();
serv.getData().then((resp)=>{
                resp.json()
            }).then(data=>{
                console.log(JSON.stringify(data));
            })
            .catch((error)=>{
                console.log(error);
            });

