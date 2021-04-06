const express= require('express') ; 
const router = express.Router() ; 
const userModel = require('../models/User')

router.get('/',(req,res)=>{
     userModel.find((err,data)=>{
    res.send(data);
   
})
})
router.post('/',(req,res)=>{

    userModel.create(req.body,(err,doc)=>{
        res.send(doc)
    })  
    
    
})
router.patch('/:userId',(req,res)=>{
     userModel.findByIdAndUpdate(req.params.userId,req.body,(err,doc)=>{
        res.send(doc)
     })
    

})
router.delete('/:userId',(req,res)=>{
        userModel.findByIdAndRemove(req.params.userId,(err,doc)=>{
            res.send(doc)
        }); 
        

})


module.exports= router; 