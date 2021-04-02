const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const restaurantsbylocation=new Schema({
    name:{
type:String,
required:true
    },

    city:{
        type:String,
        required:true
            },  
            
            
    location_id:{
        type:Number,
        required:true
    },
    
    locality:{
        type:String,
        required:true
    },
    city_id:{
        type:Number,
        required:true
    },
    mealtype_id:{
        type:Number,
        required:true
    },

    cuisine:{
        type:Array,
        required:true
    },

    image:{
        type:String,
        required:true
    },
    thumb:{
        type:Array,
        required:true
    },
    min_price:{
        type:Number,
        required:true

    }
})

module.exports=mongoose.model('restaurant', restaurantsbylocation);