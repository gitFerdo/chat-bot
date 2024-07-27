import { NextFunction, Request, Response } from "express";
import User from "../modules/User.js";
import { compare, hash } from "bcrypt";
import { createToken } from "../utils/token-manager.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get all users
    const users = await User.find();
    return res.status(200).json({ message: "Success", users });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error", cause: error.message });
  }
};

export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // user sign up
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({email})
    if(existingUser) return res.status(401).send("User already exists")

    const hashedPassword = await hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res
      .status(201)
      .json({ message: "Successfully Registered", id: user._id.toString() });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error", cause: error.message });
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // user Login
    const { email, password } = req.body;

    const user = await User.findOne({email})
    if(!user){
      return res.status(401).send("User not found")
    }

    const isPasswordCorrect = await compare(password, user.password)
    if(!isPasswordCorrect){
      return res.status(403).send("Password incorrect")
    }

    const token = createToken(user._id.toString(), user.email, "7d")

    return res
       .status(200)
       .json({ message: "Successfully Logged In", id: user._id.toString() });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Error", cause: error.message });
  }
};
