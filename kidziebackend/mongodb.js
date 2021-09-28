const express=require('express');
const MongoClient =require('mongodb').MongoClient;

const cors=require("cors");
const app=express();
app.use(cors());

var database;
app.use(express.json());

app.get("/",(req,resp)=>{

    resp.send("welcome to mongodb");

});

app.get("/api/productgroups",(req,resp)=>{
    database.collection("productgroups").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/agegroups",(req,resp)=>{
    database.collection("agegroups").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/designers",(req,resp)=>{
    database.collection("desginers").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/promocodes",(req,resp)=>{
    database.collection("promocodes").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});
app.get("/api/categories",(req,resp)=>{
    database.collection("categories").find({}).toArray((err,result)=>{
        if(err) throw err;
        resp.send(result);
    });
});

app.listen(8080,()=>{
    MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser:true},(error,result)=>{
        if(error) throw error;
        database=result.db("Kidziedatabase");
        console.log("connected successfully");

    });
});