const express = require('express');
const { dirname } = require('path');
const app = express();
const path = require('path');
const puerto = 3030;

app.use(express.static(path.join(__dirname,'public')));
app.listen(puerto, ()=>{
    console.log(`este servidor esta sirviendo en el puerto ${puerto}`);
})
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views/home.html'))
})