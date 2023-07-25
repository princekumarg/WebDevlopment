//we always have to import our specific library first
//===importing the expess module===
const express=require('express');
//===importing the path module===
//const path=require('path');
//===importing the app module===
const app=express();
//===Using PORT===
const PORT=process.env.PORT ||3000;
//===Path===
const shortUrl = require('./routes/shortUrl');
const homeRoute = require('./routes/home');


//===middlewares===
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));



//===routes===
app.use('/urlapi', shortUrl)
app.use('/', homeRoute)

//fetching a pages
/*app.get('/',(req,res)=>{
    //res.send('Hello from express...');
    //res.send('<h1>Hello Prince</h1>'); //inline html
    res.sendFile(path.resolve(__dirname)+'/index.html'); //send file to browser name index.html
 });*/ 
 /*app.get('/about',(req,res)=>{
     res.sendFile(path.resolve(__dirname)+'/about.html');//send file to browser name about.html
  });*/
 app.listen(POST,() =>{
    console.log("App is running",PORT);
 });
