var express= require('express');
var app= express();
var aapp= require('./app')

// app.get('/api',(req,res)=>{
//     res.send({
//         message:"hello gyys"
//     })

// })


app.get('/html',(req,res)=>{
    res.sendFile('/home/bhuvi/Desktop/gitapp/data.html')
})
app.use('/',aapp);


var server=app.listen(4000,'0.0.0.0',()=>{
    var port=server.address().port;
    var post=server.address().address;
    console.log('The server in running on http://%s:%s',port,post)
})