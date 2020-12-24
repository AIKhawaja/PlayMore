const mongoose = require("mongoose")
const { Schema } = mongoose

const userSchema = new Schema({
    OAuthId: {
        type: String,
        required: true
    },
    OAuthProvider: {
        type: String,
        required: true
    },
    displayName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    profileImageURL: {
        type: String,
    }
})

mongoose.model("users", userSchema)