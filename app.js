const express=require('express');
const app=express();

const port=process.env.PORT || 4000

// now to access our static file (index,about) we want to path
const path=require('path');
const hbs=require('hbs'); //requiring hbs 
const static_path=(path.join(__dirname ,"../public"));
// console.log(path.join(__dirname ,"../public")); with the help of this you can check in which directory you are
const template_path=(path.join(__dirname ,"../templates/views"));
const partials_path=(path.join(__dirname ,"../templates/partials"));

app.set('view engine', 'hbs')  //now we are using handle bare so we have to tell oue app.js  that from now search for index in views
app.set('views',template_path);
hbs.registerPartials(partials_path);  //registering for partials and then giving it  path 
app.use(express.static(static_path));   //we told express  about the static file


app.get("",(req,res)=>{
    // console.log("welcome to my starting page")
    // res.send("welcome to my starting page")
     res.render('index'); //using handle bar
})
app.get("/about",(req,res)=>{
//    console.log("welcome to my starting page")
    // res.send("welcome to my about page")
    res.render('about');
})
app.get("/weather",(req,res)=>{
    // console.log("welcome to my starting page")
    // res.send("welcome to my weather  page")
res.render('weather');
})

app.get("/foot",(req,res)=>{
    // console.log("welcome to my starting page")
    // res.send("welcome to my weather  page")
res.render('foot');
})

app.get("*",(req,res)=>{
    // console.log("welcome to my starting page")
    // res.send("404 errer")
res.render('error');
reeormsg:'oops!!! page not found';
})
app.listen(port,()=>{
    console.log(`listen to port at ${port}`)
})