import User from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const currentUser = req.auth.userId;
        const users = await User.find({clerkId: {$ne: currentUser}}); // $ne = not equal
        res.status(200).json(users);
    } catch (error) {
        console.log("Error when get all users", error);
        next(error);
    }
}