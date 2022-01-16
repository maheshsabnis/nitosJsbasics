const express = require('express');
const cors = require('cors');

const instance= express();
instance.use(cors());

const products = [
    {ProdId:101,ProdName:'P1'},
    {ProdId:102,ProdName:'P2'},
    {ProdId:103,PrdName:'P3'}
];

instance.get('/api/products',(req,resp)=>{
    resp.status(200).send(JSON.stringify(products));
});

instance.listen(9091, ()=>{
    console.log(`Category Service on 9091`);
});