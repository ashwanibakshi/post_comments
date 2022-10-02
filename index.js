const express   = require("express");
const mongoose  = require("mongoose");
const conDB     = require("./config/db").conn;
const path      = require("path");


mongoose.connect(conDB)
.then(()=>{
    console.log('connected to db');
})
.catch((err)=>{
    console.log('connection error',err);
})

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/post',require('./routes/postRoute'));
app.use('/comment',require('./routes/commentRoute'));

app.use((err,req,res,next)=>{
       if(err){
        res.json({error:err.message});
       }
       else{
        next();
       }
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log(`server run at port ${port}`)});