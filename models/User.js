const mongoose= require('mongoose'); 


const userModel = mongoose.Schema({
    name: {
        type: String, 
        required: true , 
    },
    lastName: {
        type: String, 
        requireed: true , 
    }
})

module.exports= mongoose.model('user',userModel)
