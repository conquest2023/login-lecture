//모듈
const express=require("express");
const app=express();

const PORT=3000;
//라우팅
const home=require("./routes/home");
//앱 세팅
app.set("views","./views");
app.set("view engine","ejs");
app.use(express.static(`${__dirname}/src/public`));

app.get("/",(req,res)=>{
   res.render("home/index");
});

app.use("/",home); //use->미들웨어를 등록해주는 메서드

app.get("/login",(req,res)=>{
res.render("home/login");
});

module.exports=app;