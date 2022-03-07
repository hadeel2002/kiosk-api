const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser") ;
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const port = 5090;

const url="mongodb+srv://kiosk_user:hadeel123@cluster0.wzsev.mongodb.net/kiosk_db?retryWrites=true&w=majority";
mongoose.connect(url)
.then(results => {
    console.log(results);
    app.listen(port,function(){
        console.log(`server is running via port ${port}`);
    })
})
.catch(err =>{
    console.log(err);
})
