const mailer=require('nodemailer')
const userdetail=require('../modals/signup');
exports.usersignupform=(req,res)=>{
    const requestBody=req.body;
   const fname=requestBody.firstname;
   const lname=requestBody.lastname;
   const gender=requestBody.gender;
   const pwd=requestBody.password;
const email=requestBody.email;


var transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sarathbunny75',
      pass: '12345abcd'
    }
  });

  
  
  var mail= {
    from: 'sarathbunny75@gmail.com',
    to: email,
    subject: 'Thankyou for Creating Account in our Application',
    html:`Welcome ${fname} ${lname}`
  };
  
  transporter.sendMail(mail, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  




   const user= new userdetail({firstname:fname, lastname:lname, gender:gender, password:pwd , email:email});
   user.save()
   .then(response=>
    {
    res.status(200).json({message:"user registered successfully", signup:response})
    })
   .catch(err=>{res.status(500).json({error:err})});
};

exports.userlogin =(req,res)=>{
    const reqBody = req.body;
    const email= reqBody.email;
    const password=reqBody.password;
    const gender=reqBody.gender;


    var transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'sarathbunny75',
          pass: '12345abcd'
        }
      });
    
      
      
      var mail= {
        from: 'sarathbunny75@gmail.com',
        to: email,
        subject:`${email} LoggedIn Successfully`,
        html:'<p style="color:red;border:4px solid green;background:black">Thankyou</p>'
      };
      
      transporter.sendMail(mail, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    
      


    userdetail.find({email:email,password:password,gender:gender})
        .then(response =>{ 
            if(response.length!=0)
            {
            res.status(200).json({ message: "User LoggedIn Successfully", user: response, IsLoggedIn: true })
        }
        else{
            res.status(200).json({ message: "User Does not exist", user: response, IsLoggedIn: false })

        }
        })
        .catch(err => { res.status(500).json({ error: "err "})});
}