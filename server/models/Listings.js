const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    title: String,
    description: String,
    location: String,
    price: Number,
    images: [String],
    coordinates: {
        lat: Number,
        lng: Number,
    },
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

module.exports = mongoose.model("Listing", ListingSchema);
