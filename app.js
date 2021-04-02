var express=require('express');
var mailer=require('nodemailer')
var mongoose=require('mongoose');
var cors=require('cors');
var bodyparser=require('body-parser');
var app=express();
var port=process.env.PORT||8080;
var host='0.0.0.0';
const routes=require('./routers/index');




app.use(cors());

app.use(bodyparser.json());
app.use('/', routes);

mongoose.connect('mongodb+srv://BujalaSarathKumarReddy:12345abcd@cluster0.nud0w.mongodb.net/SkrRestaurant?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true }, ()=>{
app.listen(port,host, ()=>{
    console.log(`Server is running at ${host}:${port}`);
});
})