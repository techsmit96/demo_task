const { Sequelize, Op } = require("sequelize");
const demo = require("../../configs/db/demo");
const UserModel = require("../../models/UserModel");

exports.addUser = async(req,res,next)=>{
    console.log("req.bosy",req.body);
    
    let data = await UserModel.create(req.body)

    return res.status(200).json({
        message:"data created",
        data
    })
}