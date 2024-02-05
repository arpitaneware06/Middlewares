const express = require('express');
const app = express();
const ExpressError = require('./ExpressError');


/*app.use((req,res,next)=>{
    console.log("hey I am middleware");
   next();
});
app.use((req,res,next)=>{
    console.log("hey I am 2nd middleware");
   next();
});
//logger-morgan
app.use((req,res,next)=>{
    req.responseTime = new Date(Date.now()).toString();
    console.log(req.method,req.hostname,req.path,req.responseTime);
    next();
});*/

//page not found

app.get("/err",(req,res)=>{
    abce=abce;
});
app.get("/admin",(req,res)=>{
  
    throw new ExpressError(401,"ACCESS is forbidden");
});

app.use((err,req,res,next)=>{
 let {status=500,message="eror"}=err;
 res.status(status).send(message);
    

});
//app.use((req,res)=>{
  //  res.status(404).send("page not found");
//});

app.use("/api",(req,res,next)=>{
    let {token} = req.query;
   if(token ==="give access"){
    next();
   }
   throw new ExpressError(401,"ACCESS DENIED");
});


app.get("/api",(req,res)=>{
    res.send("data");
});
app.get("/",(req,res)=>{
    res.send("Hi i am root");
});

app.get("/random",(req,res)=>{
    res.send("this is random page");
});


app.listen(8080,()=>{
console.log("server is running on port");
});
