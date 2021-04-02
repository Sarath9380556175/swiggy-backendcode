const Location=require('../modals/locations');


exports.getLocations=(req,res)=>{
    Location.find()
.then(response=>res.status(200).json({message:"Locations fetched successfully", locations:response}))
.catch(err=>res.status(500).json({error:err}));
};