const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


//database validation
let userSchema = mongoose.Schema({
    username:{
        type:String,
        minlength: 4,
        unique:true,
        required:true,
    
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    password:{
        type:String,
        required:true,
        select:false,//find query -- select false --> response ma add na thay
        lowercase:true,
    
    },
    role:{
        enum:["user" , "admin" ],
        type:String,
        default:"user",
    
    },
});

//jwt token
userSchema.methods.generateAuthToken = function(){
    let token = jwt.sign({_id:this._id}, process.env.JWT_SECRET,{
        expiresIn:"7d",

    })

        return token;
};//this._id --> database user's _id

//bcrypt

//hash(static)

userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
};

//commpare

userSchema.methods.comparePassword = async function(password){
    let result = await bcrypt.compare(password,this.password);
    return result;

};//this.password --> database user's password
    

module.exports = mongoose.model("user",userSchema);