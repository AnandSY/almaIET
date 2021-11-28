const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("hi server is up and running");
});

app.listen(8000,()=>{
    console.log("server is running at 8000 port");
});