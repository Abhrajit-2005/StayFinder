const Listing = require("../models/Listings");

class ListingRepo {

    #Filter(filter) {
        const filterData = {};
        if (filter?.location) {
            filterData.location = filter.location;
        }
        if (filter?.priceRange) {
            filterData.price = { $gte: filter.priceRange.min, $lte: filter.priceRange.max };
        }
        if (filter?.dateRange) {
            filterData.date = {
                $gte: new Date(filter.dateRange.start),
                $lte: new Date(filter.dateRange.end)
            };
        }
        return filterData;
    }

    async createListing(listingData) {
        try {
            const listing = await Listing.create(listingData);
            return listing;
        } catch (error) {
            throw new Error("Error creating listing: " + error.message);
        }
    }

    async getListingById(listingId) {
        try {
            const listing = await Listing.findById(listingId);
            if (!listing) {
                throw new Error("Listing not found");
            }
            return listing;
        } catch (error) {
            throw new Error("Error fetching listing: " + error.message);
        }
    }

    async updateListing(listingId, updateData) {
        try {
            const listing = await Listing.findByIdAndUpdate(listingId, updateData, { new: true });
            if (!listing) {
                throw new Error("Listing not found");
            }
            return listing;
        } catch (error) {
            throw new Error("Error updating listing: " + error.message);
        }
    }

    async deleteListing(listingId) {
        try {
            const listing = await Listing.findByIdAndDelete(listingId);
            if (!listing) {
                throw new Error("Listing not found");
            }
            return listing;
        } catch (error) {
            throw new Error("Error deleting listing: " + error.message);
        }
    }

    async getListingsByUserId(userId) {
        try {
            const listings = await Listing.find({ user: userId });
            return listings;
        } catch (error) {
            throw new Error("Error fetching listings: " + error.message);
        }
    }

    async getAllListings(filter) {
        try {
            const filterData = this.#Filter(filter);
            const listings = await Listing.findAll({
                where: filterData
            });
            return listings;
        } catch (error) {
            throw new Error("Error fetching all listings: " + error.message);
        }
    }
}

module.exports = new ListingRepo();