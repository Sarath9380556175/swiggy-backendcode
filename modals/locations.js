var mongoose=require('mongoose');

const Schema=mongoose.Schema;

const locationschema=new Schema({
    name:{
        type:String,
        require:true
    },

    location_id:{
        type:Number,
        required:true
    },

    city_id:{
        type:String,
        required:true
    },

    city:{
        type:String,
        required:true
    },

    country_name:{
        type:String,
        required:true
    }

});

module.exports=mongoose.model('location',locationschema);
