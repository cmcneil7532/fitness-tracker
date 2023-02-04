const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const CreateUserModel = require('../models/usersWorkout');
const { ThemeProvider } = require('@aws-amplify/ui-react');

//Proctect our login route

const protect = asyncHandler(async(req, res, next)=>{
    let token;

    //Check for the Authorization in the headerS (will be an object)
    //If we find the token want to see if the token starts with bearer
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            //Grab the token from the headers/authorization
            token  = req.headers.authorization.split(' ')[1]

            //Verfy the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //Get user from the token

            req.user = await CreateUserModel.findById(decoded.id).select('--password');
            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error('Not authorized')
        }
    }
    //No token 
    if(!token){
        res.status(400)
        throw new Error('Not authorized, token not found')
    }

})

module.exports={
    protect
}