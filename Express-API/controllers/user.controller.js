const userService = require("../services/user.service");
const userModel = require("../models/user.model");
const {validationResult} = require("express-validator");


module.exports.registerUser = async (req,res) => {
    const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()});
    
    }

    const {username,email,password} = req.body;

    //check user is already registerd or  not
    let isExist = await userModel.findOne({email: email});
    if(isExist){
        return res.status(400).json({message: "user is already exist"})
    }


    const hashPassword = await userModel.hashPassword(password);
    


    const user = await userService.createUser({
        username,
        email,
        password:hashPassword,

    });

    let token = await user.generateAuthToken();

    res.status(200).json({token, user});


    
};

module.exports.loginUser = async (req,res) => {
let error = validationResult(req);
if(!error.isEmpty()){
    return res.status(400).json({error:error.array()});
}
const {email,password} = req.body;
let user = await userModel.findOne({email: email}).select("+password");
if(!user){
    return res.status(400).json({message: "invalid email or password"});
}

const isMatch = await user.comparePassword(password);
if(!isMatch){
    return res.status(400).json({message: "invalid email or password"});    
}
let token = await user.generateAuthToken();
res.status(200).json({token, user});
}


module.exports.Profile = async (req,res) => {
    res.status(200).json({user:req.user});

};