import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Register function
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile,
      impressions,
    } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashPass,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile: Math.floor(Math.random * 1000),
      impressions: Math.floor(Math.random * 1000),
    });

    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
