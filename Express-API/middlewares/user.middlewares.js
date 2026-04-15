const { model } = require("mongoose");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");


module.exports.authUser = async (req,res,next) => {
    const token =res.cookies.token || req.header.authoration.split(" ")[1];

    if(!token){
        return res.status(400).json({message: "Token Expired Re-SignIn"});

    }
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await userModel.findOne({ _id: decode._id });

        if(!user){
            return res.status(401).json({message: "Unathorized"});

        }


        res.status(200).json({user});
        return next();
    } catch (error) {
        return res.status(500).json({error});
    }
};