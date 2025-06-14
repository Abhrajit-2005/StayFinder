const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    listing: { type: mongoose.Schema.Types.ObjectId, ref: "Listing" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    startDate: Date,
    endDate: Date
});

module.exports = mongoose.model("Booking", BookingSchema);
