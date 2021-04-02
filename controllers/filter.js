var restaurant=require('../modals/restaurant')
exports.getRestaurantsbyLocationId=(req,res)=>{
  const  requestBody=req.body;

  const mealtype=requestBody.mealtype;
  const location=requestBody.location;
  const cuisine=requestBody.cuisine;
  const lcost=requestBody.lcost;
  const hcost=requestBody.hcost; 
  const sort=requestBody.sort ? requestBody.sort :1; //ternary operator
  const page=requestBody.page ? requestBody.page :1; //ternary operator
  let payload={};
  if(mealtype)
  {
      payload=
      { 
          mealtype_id:mealtype
        }
  }

  
  if(mealtype && location)
  {
      payload=
      {
          mealtype_id:mealtype,
          location_id:location
        }   
  }


  if( location )
  {
      payload=
      {
        
          location_id:location
          
        }   
  }

  if( location && cuisine&&lcost&&hcost)
  {
      payload=
      {
        
          location_id:location,
          cuisine:cuisine,
          min_price:{$lte:hcost,$gte:lcost}
          
        }   
  }



  if(mealtype && cuisine)
  {
      payload=
      {
          mealtype_id:mealtype,
          cuisine:cuisine
        }
    }

  if(mealtype && cuisine && location)
  {
      payload=

      {
          mealtype_id:mealtype,
          cuisine:cuisine,
          location_id:location

      }
  }


  


  if(mealtype && lcost && hcost)
  {
      payload={
    mealtype_id:mealtype,
        min_price:{$lte:hcost,$gte:lcost}
      }
  }


  if(mealtype && location&& lcost && hcost)
  {
      payload={
    mealtype_id:mealtype,
    location_id:location,
        min_price:{$lte:hcost,$gte:lcost}
      }
  }


  

  if(mealtype && location && cuisine && lcost && hcost)
  {
      payload={
          mealtype_id:mealtype,
          location_Id:location,
          cuisine:cuisine,
          min_price:{$lte:hcost,$gte:lcost}
          
       }
  }

  if(mealtype &&location&& cuisine && lcost && hcost )
  {
      payload=

      {
          mealtype_id:mealtype,
          cuisine:cuisine,
          location_id:location,
          min_price:{$lte:hcost,$gte:lcost}

      }
  }


  if(mealtype &&cuisine && lcost && hcost )
  {
      payload=

      {
          mealtype_id:mealtype,
          cuisine:cuisine,
          min_price:{$lte:hcost,$gte:lcost}

      }
  }


  restaurant.find(payload).sort({min_price:sort})
  .then(response=> res.status(200).json({message:"restaurants filtered successfully", filter:response}))
  .catch(err=>res.status(500).json({error:err}));

};