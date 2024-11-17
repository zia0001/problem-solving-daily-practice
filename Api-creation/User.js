import mongoose from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      min: 2,
      max: 30,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 50,
    },
    phone:{
      type: String,
      unique: true,
    },
    Age: {
      type: Number,
    },
    gender: {
      type: String,
    },
    profileImage: {
      type: String,
      default:"",
    },
    timestamps: true

  });

  const User = mongoose.model("User", userSchema);
  export default User;