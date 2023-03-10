import mongoose from 'mongoose'
const { Schema } = mongoose

const userModel = new Schema({
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
        required: true
    },
    img: {
        type: String,
        required: false
    },
    country: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    isSeller: {
        type: Boolean,
        default: false
    },
    linkedin: {
        type: String,
        required: false
    },
    twitter: {
        type: String,
        required: false
    },
    twitch: {
        type: String,
        required: false
    },
    reddit: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
}, {
        timestamps: true
})

export default mongoose.model("User", userModel)
