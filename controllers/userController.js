import User from "../models/userModel.js";
import createError from "../utils/createError.js";

// ROUTE    /users/:id
// DESC.    @DELETE (DELETE) User from Users Collection
export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);

    if (req.userId !== user._id.toString()) {
        return next(createError(403, "You can only delete your account!"))
    }

    await User.findByIdAndDelete(req.params.id);
    return res.status(200).send("User deleted!");
};
