import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fthenounproject.com%2Fbrowse%2Ficons%2Fterm%2Fblank-profile%2F&psig=AOvVaw3ci08PdeXhOyBQ8Ck2UmYU&ust=1704974093209000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCID_3djh0oMDFQAAAAAdAAAAABAE"
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;