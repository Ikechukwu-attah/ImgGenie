import { create } from "domain";
import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
  clerkId: number;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  photo: string;
  planId: string;
  creditBalance: number;
  createdAt?: Date;
  updatedAt?: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true },

  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  photo: { type: String },
  planId: { type: Number, default: 1 },
  creditBalance: { type: Number, default: 10 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
