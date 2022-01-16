const express = require('express');
const cors = require('cors');

const instance= express();
instance.use(cors());

const categories = [
    {CatId:101,CateName:'C1'},
    {CatId:102,CateName:'C2'},
    {CatId:103,CateName:'C3'}
];

instance.get('/api/categories',(req,resp)=>{
    resp.status(200).send(JSON.stringify(categories));
});

instance.listen(9090, ()=>{
    console.log(`Category Service on 9090`);
});