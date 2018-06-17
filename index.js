const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    console.log("Home is Called.");
    res.send("Home is called");
})
  app.listen(3000);