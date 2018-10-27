const express= require('express');
const router= express.Router();
// const mongoose =require('mongoose');
const Product =require('../model/products');





// Read the  read the product

router.get('/read',(req,res,next)=>{

Product.find().select().exec().then(
    doc=>res.json({doc})
).catch(error=>console.log(error)
    )

});



// create the product  api 


router.post('/create',
(req,res,next)=>{
    const product= new Product({
        name: req.body.name,
        price: req.body.price,
        status: req.body.status,
        
    })
    
   product.save().then((prompt)=>{
    prompt.message("sucessssfully save")

    }).catch((error)=>{
        console.log(error)
    })
    res.status(200).json({
        message :" it is working  not working goo fine",
        create:product ,
        })

});


// update the api of 

router.patch('/update/productID',(req,res,next)=>{
    const id=req.params.productID;
const updateOps={};
for (const ops of req.body) {
   updateOps[ops.propName]=ops.value;
}
Product.update({_id:id},{$set: updateOps}).exec().then(doc=>{
    res.json({doc})
}).catch(error=>{
    res.json({error})
});
   
});
router.put('/put',(req,res,next)=>{

    res.status(200).json({
        message :"some data id put indise"
    })
});

//  delete the product 


router.delete('/delete/:productID',(req,res,next)=>{
    const id=req.params.productID;
    Product.remove({_id:id}).exec().then(result=>{res.status(200).json(result)}).catch(error=>{
        console.log(error)
    });
})


// find by id detaisl


router.get('/read/:productID',(req,res,next)=>{
    const id=req.params.productID;

    Product.findById(id).select().exec().then(
        doc=>res.json({doc})
    ).catch(error=>console.log(error)
        )
    
    });
    
 

module.exports= router