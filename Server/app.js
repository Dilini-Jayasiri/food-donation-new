// Import all dependencies

const dotenv =require('dotenv');
const express=require('express');
const bcryptjs=require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app=express();

//Config env file and require connection file
dotenv.config({path: './config.env'});
require('./db/conn');
const port = process.env.PORT;

//Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const authenticate = require('./middleware/authenticate')
//These method is used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.get('/',(req,res) =>{
    res.send("Hello world");
})

// Registration
app.post('/register',async(req,res) =>{
    try{
        //Get body or data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        //Save method is used to create user
        //But before saving or inserting, password will hash.
        //Because of hashing.After hash, it will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    }catch(error){
        res.status(400).send(error);
    }
})

//Login User
app.post('/login',async (req,res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //Find User if Exist
        const user = await Users.findOne( {email : email});
        if(user){
            //Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                //Generate Token Which is Define in user schema
                const token = await user.generateToken();
                res.cookie("jwt",token,{
                    //Expires Token in 24 hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")

            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials");
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

// Messages
app.post('/message',async(req,res) =>{
    try{
        //Get body or data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMessage= new Message({
            name : name,
            email : email,
            message : message
        });

        //Save method is used to create user
        //But before saving or inserting, password will hash.
        //Because of hashing.After hash, it will save to DB
        const created = await sendMessage.save();
        console.log(created);
        res.status(200).send("Message Sent");

    }catch(error){
        res.status(400).send(error);
    }
})

//Logout Page
app.get('/logout', (req,res) =>{
    res.clearCookie("jwt",{path : '/'})
    res.status(200).send("User Logged Out")
})

//Authentication
app.get('/auth', authenticate, (req,res) => {

})

//Run Server
app.listen(port,() =>{
    console.log("Server is listening");
})
