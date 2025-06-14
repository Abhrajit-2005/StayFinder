const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema({
    host: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    description: String,
    location: String,
    price: Number,
    images: [String],
    coordinates: {
        lat: Number,
        lng: Number,
    },
    reviews: [{
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now }
    }],
    amenities: [String],
    contactNo: String,
});

module.exports = mongoose.model("Listing", ListingSchema);
