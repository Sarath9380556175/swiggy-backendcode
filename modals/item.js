const mongoose=require('mongoose')

const Schema=mongoose.Schema;


const restaurantitems=new Schema({
  name:{
 type:String,
 required:true
  },

  description:{
    type:String,
    required:true
    },
        restaurantId:{
            type:String,
            required:true
            },
            ingridients:{
                type:Array,
                required:true
                },

                image:{
                    type:String,
                    required:true
                    },

                    qty:{
                        type:Number,
                        required:true
                        }

})

module.exports=mongoose.model('items',restaurantitems);