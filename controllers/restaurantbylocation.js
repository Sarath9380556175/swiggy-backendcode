

var restaurant=require('../modals/restaurant')
exports.getRestaurantsbyLocation=(req,res)=>{
    const LocationId=req.params.locationId;
    restaurant.find({location_id:Number(LocationId)})
    .then(response=>res.status(200).json({message:"restaurants fetched successfully", restaurant:response}))
    .catch(err=>res.status(500).json({error:err}));

};

exports.filterrestaurants=(req,res)=>{
  const  requestBody=req.body;
  const location=requestBody.location;
  const mealtype=requestBody.mealtype;
  const cuisine=requestBody.cuisine;
  const lcost=requestBody.lcost;
  const hcost=requestBody.hcost; 
  const sort=requestBody.sort ? requestBody.sort :1; //ternary operator
  const page=requestBody.page ? requestBody.page :1; //ternary operator
  const countperpage=2;
  let startindex=(page*countperpage)-countperpage;
let endindex=(page*countperpage);
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
          
          location_id:location,
          mealtype_id:mealtype
        }   
  }


  if( location )
  {
      payload=
      {
        
          location_id:location
          
        }   
  }


  if(mealtype && cuisine)
  {
      payload=
      {
          mealtype_id:mealtype,
          cuisine:{$elemMatch:{id:{$in:cuisine}}}
        }
    }

  if(mealtype && cuisine && location)
  {
      payload=

      {
          mealtype_id:mealtype,
          cuisine:{$elemMatch:{id:{$in:cuisine}}},
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
          cuisine:{$elemMatch:{id:{$in:cuisine}}},
          min_price:{$lte:hcost,$gte:lcost}
          
       }
  }

  if(mealtype &&location&& cuisine && lcost && hcost )
  {
      payload=

      {
          mealtype_id:mealtype,
          cuisine:{$elemMatch:{id:{$in:cuisine}}},
          location_id:location,
          min_price:{$lte:hcost,$gte:lcost}

      }
  }


  if(mealtype &&cuisine && lcost && hcost )
  {
      payload=

      {
          mealtype_id:mealtype,
          cuisine:{$elemMatch:{id:{$in:cuisine}}},
          min_price:{$lte:hcost,$gte:lcost}

      }
  }


  restaurant.find(payload).sort({min_price:sort})
  .then(response=>{
    const filterpage=response.slice(startindex,endindex);
    const pagecount=Math.ceil(response.length/2);
    let pagecountarr=[];
    for(i=1;i<=pagecount;i++)
    {
        pagecountarr.push(i);
    }
    res.status(200).json({message:"restaurants filtered successfully", filter:filterpage, pagecount:pagecount,pagecounts:pagecountarr})})
  .catch(err=>res.status(500).json({error:err}));

};


exports.getRestaurantsbyId=(req,res)=>{

const resta=req.params.restaurantid;

restaurant.findById(resta)
.then(response=>res.status(200).json({message:"restaurant fetched successfully", restaurants:response}))
.catch(error=>res.status(500).json({error:"err"}));

};

