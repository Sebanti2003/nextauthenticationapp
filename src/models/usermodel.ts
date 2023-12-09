import mongoose from "mongoose";
const user_schema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        unique: true,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotpasswordtoken:String,
    forgotpasswordexpiry:Date,
    //what is actually verifytoken how we get those

    //api produces those tokens and also give each token a special signature or sign with a secret key and in this way whenever it is performing any api request it checks the signature that it matches with the secret key or not and the api also gives it an expiry date of that token.


    //And obviously these values are encrypted with the help of bcrypt so that nobody can see it even the backend developer who is actually behind the api of that certain application


    //api is just a bussiness logic it can store anything with it 

    //api forms that token and sends one copy to the db of that user and one to the user it does not keep it with itself but eventually it interacts with it.
    verifyToken:String,
    verifyTokenExpiry:Date
},{timestamps:true})
export const User=mongoose.model('User',user_schema);
