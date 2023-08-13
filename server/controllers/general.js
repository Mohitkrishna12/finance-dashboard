import User from "../models/User.js";

export const getUser = async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message});
    }
}