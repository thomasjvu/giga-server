import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) return res.status(404).send("User not found!")

        const isCorrect = bcrypt.compareSync(req.body.password, user.password)
        if(!isCorrect) return res.status(404).send("Wrong password or username!")

        const token = jwt.sign({
            id:user._id,
            isSeller: user.isSeller,
        }, )

        const {password, ...info} = user
        res.status(200).send(info)
    } catch (error) {}
};

export const logout = async (req, res) => {};

export const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);

        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("User has been created!");
    } catch (error) {
        res.status(500).send("Something went wrong!");
    }
};
