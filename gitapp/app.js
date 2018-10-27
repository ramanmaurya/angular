const express= require('express');
const app =express();

// const morgan=require('morgan')
const bodyparser=require('body-parser');
const  mongoose=require('mongoose');



//morgan call the next funtion in side the product

const myuUser=require('./api/routes/product')

mongoose.connect("mongodb://localhost:27017/user");


// morgan is use to as middle ware to pass the data in the consele
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
// app.use(morgan('dev'))
app.use((req,res,next)=>{
res.header("Access-Allow-Control-Origin","*");
res.header("Access-Allow-Control-header","prigin,access,accept,authentication"
);
if(req.method==='OPTIONS'){
res.header("Access-Allow-Control-Method","GET,POST,PUT,DELETE,PATCH")
return res.status(200).json({});

}
next();
 })




app.use('/',myuUser);
 
app.use((req,res,next)=>{
    const error =new Error('not found')
error.status=404
next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:"data is not founded"
        }
    });
});


module.exports=app;