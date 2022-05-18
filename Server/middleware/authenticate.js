//Authenticate is the Middle Ware here
//It will checked before the response.

const Users = require('../models/userSchema');
const jwt = require('jsonwebtoken')

const authenticate = async (req,res,next) => {
    try {
        //Get the Cookies
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).send("No Token")
        }else{
            const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
            const rootUSer = await Users.findOne({_id : verifyToken._id, "tokens.token" : token});

            if(!rootUSer){
                res.status(401).send("User Not Found")
            }else{
                res.status(200).send("Authorized User")
            }
        }

        next()
    } catch (error) {
        res.status(401).send("Error")
        console.log(error)
    }
}

module.exports = authenticate;