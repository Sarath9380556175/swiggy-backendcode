const { ObjectID } = require('mongodb');
var mongoose=require('mongoose');

const Schema=mongoose.Schema;

const getItemsfromrestaurant=new Schema({
  _id:
  {
      type:ObjectID,
      required:true
  },
name:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    image:
    {
        type:String,
        required:true
    },
    meal_type:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('mealtype',getItemsfromrestaurant);