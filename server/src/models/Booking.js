const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    checkin: Date,
    checkout: Date,
    guests: Number,
    totalPrice: Number,
    status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },
});

module.exports = mongoose.model("Booking", BookingSchema);
