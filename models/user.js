import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const userSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exist'],
        required: [true, 'Email is required']

    },
    username: {
        type: String,
        required: [true, 'Username is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],

    },
    image: {
        type: String
    }
})

const User = models.User || model("User", userSchema);

export default User