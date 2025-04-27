const Task =  require("../models/Task");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// @desc     Get all users (Admin only);
// @route    Get/api/users/
// @access   Private (Admin)
const  getUsers= async (req, res)=>{
    try{
        const users = await User.find({ role:"member" }).select("-password");
        
        // Add task counts to each user
        const usersWithTaskCounts = await Promise.all(users.map(async (user)=>{
        const pendingTask = await Task.countDocuments({ assignedTo: user._id, status:"Pending"});
        const inProgressTask = await Task.countDocuments({ assignedTo: user._id, status:"In Progress"});
        const completedTask = await Task.countDocuments({ assignedTo: user._id, status:"Completed"})
        return {
            ...user._doc, //Include all existing data
            pendingTask,
            inProgressTask,
            completedTask
        };
        }));

        res.json(usersWithTaskCounts);
    }catch(error){
        res.status(500).json({message: "Server error", error:error.message});
    }
};

// @desc  Get user by Id
// @route  GET /api/users/:id
// @access Private
const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id).select("-password");
        if(!user) return res.status(404).json({message: "User not fond" });
        res.json(user)
    }catch(error){
        res.status(500).json({message: "Server error", error:error.message});
    }
};

// // @desc Delete a user (Admin only)
// // @route DELETE /api/users/:id
// // @access Private (Admin)
// const deleteUser = async (req, res)=>{
//     try{
//     }catch(error){
//         res.status(500).json({message: "Server error", error:error.message});
//     }
// }

module.exports = {getUsers, getUserById };