const express=require('express');
const mysql = require('mysql2');

const db=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"Tia1116..",
    port:"3307",
    database:"epmysql"
})
db.username
const port =process.env.PORT || 8082
const app=express.Router();
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("MySql Connected")
})
app.get("/createdb",(req,res)=>{
    let sql="CREATE DATABASE epmysql";
    db.query(sql,(err)=>{
        if(err){
            throw err;
        }
        res.send("Database created")
    })
})
app.get("/createusers",(req,res)=>{
    let sql="CREATE TABLE users(id int AUTO_INCREMENT,username VARCHAR(255),password VARCHAR(25),PRIMARY KEY(id))";
    db.query(sql,(err)=>{
        if(err){
            throw err;
        }
        res.send("Users table created")
    })
})

app.get("/createnewuser",(req,res)=>{
    let post={
        username:"Tia",
        password:"Tia1116.."
    }
    let sql="INSERT INTO users SET?";
    let query=db.query(sql,post,(err)=>{
        if(err){
            throw err;
        }
        res.send("New user created")
    })
})
app.get("/updateuser/:id", (req, res) => {

    let newName = "Updated name";
  
    let sql = `UPDATE users SET username = '${newName}' WHERE id = ${req.params.id}`;
  
    let query = db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Post updated...");
  
    });
  
  });
  app.get("/deleteuser/:id", (req, res) => {

    let sql = `DELETE FROM users WHERE id = ${req.params.id}`;
  
    let query = db.query(sql, (err) => {
  
      if (err) {
  
        throw err;
  
      }
  
      res.send("Employee deleted");
  
    });
  
  });
 
app.listen(port,()=>{
    console.log(`server started on ${port}`)
})