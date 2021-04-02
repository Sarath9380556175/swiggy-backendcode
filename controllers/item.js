const item=require('../modals/item')

exports.getitems=(req,res)=>{
const itemid=req.params.itemid;

item.find({restaurantId:itemid})
.then(response=>res.status(200).json({message:'items fetched successfully', items:response}))
.catch(err=>res.status(500).json({error:err}))
}