import User from "../modules/User.js";
export const getAllUsers = async (req, res, next) => {
    try {
        // Get all users
        const users = await User.find();
        return res.status(200).json({ message: "Success", users });
    }
    catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Error", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map