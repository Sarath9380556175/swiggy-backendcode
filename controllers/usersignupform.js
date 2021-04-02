

const signup=require('../modals/usersignup');

exports.createanaccount=(req,res)=>
{
    const requestBody=req.body;
    const fname=requestBody.firstname;
    const lname=requestBody.lastname;
    const email=requestBody.email;
    const password=requestBody.password;

   const user=new signup({firstname:fname,lastname:lname,email:email,password:password});
   user.save()
   .then(response=>res.status(200).json({message:"user registered successfully",signup:response}))
   .catch(err=>res.status(500).json({error:err}));
};

exports.userLogin=(req,res)=>{

    const Reqbody=req.body;
    const email=Reqbody.email;
    const password=Reqbody.password;


    signup.find({email:email,password:password})
    .then(response=>{
        if(response.length!=0)
        {
        res.status(200).json({message:"user loggedin successfully",login:response, isLoggedIn:true})
        }
else{
    res.status(200).json({message:"User details does not exist",login:response, isLoggedIn:false})

}
})
    .catch(err=>res.status(404).json({error:err}));

}