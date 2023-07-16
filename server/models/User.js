import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, index: true, required: true, unique: true },
    email: { type: String, index: true, required: true, unique: true },
    password: { type: String, required: true },
    images: {
      type: Array,
      default: [
        {
          url: "https://placehold.co/200x200/000000/FFF?text=profile",
          public_id: Date.now,
        },
      ],
    },
    name: String,
    about: String,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
