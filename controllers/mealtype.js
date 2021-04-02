const mealtype=require('../modals/mealtype');

exports.getItemsfromrestaurant=(req,res)=>{
const requestBody=req.body;

const restaurant=requestBody.id;

let payload={};

if(restaurant)
{
    payload= {_id:restaurant}
}

mealtype.find(payload)
.then(response=>res.status(200).json({message:"mealtype fetched successfully", mealtype:response}))
.catch(err=>res.status(500).json({error:err}))

};