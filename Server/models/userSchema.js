const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//User Schema or Document
const userSchema = new mongoose.Schema({
    // firstName : {
    //     type : String,
    //     required : true,

    // },
    // lastName : {
    //     type : String,
    //     required : true,
    // },
    
    // addressNo : {
    //     type : String,

    // },
    // StreetLine1: {
    //     type : String
    // },
    // StreetLine2: {
    //     type : String
    // },
    // city: {
    //     type : String,
    //    // required : true
    // },
    username : {
        type : String,
        required: true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    // mobile : {
    //     type : String,
    //   //  required : true
    // },
    tokens : [
        {
            token : {
                type : String,
                required : true
            }
        }
    ]
})

//Hashing Password to Secure
userSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = bcryptjs.hashSync(this.password,10);
    }
    next();
})

//Generate Tokens to verify user
userSchema.methods.generateToken = async function(){
    try {
        let generatedToken = jwt.sign({_id : this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token : generatedToken});
        await this.save();
        return generatedToken;
    } catch (error) {
        console.log(error)
    }
}

//Create Model
const Users = new mongoose.model("USER", userSchema);

module.exports = Users;