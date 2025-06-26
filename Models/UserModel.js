import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String },
    // phone: {type: Number},
    uid: {
        type: String,
        required: true,
        unique: true, // Ensures no duplicate Firebase users
    },
    email: { type: String, unique: true, required: true },
    password: { type: String },
    phone: { type: Number },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user',
    }
},
    { timestamps: true }
)
const User = new mongoose.model('User', userSchema);
export default User;