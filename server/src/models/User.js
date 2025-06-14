const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    isHost: { type: Boolean, default: false },
    role: { type: String, enum: ["user", "host"], default: "user" }
});

module.exports = mongoose.model("User", UserSchema);
