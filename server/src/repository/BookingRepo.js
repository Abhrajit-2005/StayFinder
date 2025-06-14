const Booking = require('../models/Booking');

class BookingRepo {
    async createBooking(bookingData) {
        try {
            const booking = await Booking.create(bookingData);
            return booking;
        } catch (error) {
            throw new Error('Error creating booking: ' + error.message);
        }
    }
    async getBookingById(bookingId) {
        try {
            const booking = await Booking.findById(bookingId);
            if (!booking) {
                throw new Error('Booking not found');
            }
            return booking;
        }
        catch (error) {
            throw new Error('Error fetching booking: ' + error.message);
        }
    }
    async updateBooking(bookingId, updateData) {
        try {
            const booking = await Booking.findByIdAndUpdate(bookingId, updateData, { new: true });
            if (!booking) {
                throw new Error('Booking not found');
            }
            return booking;
        }
        catch (error) {
            throw new Error('Error updating booking: ' + error.message);
        }
    }
    async deleteBooking(bookingId) {
        try {
            const booking = await Booking.findByIdAndDelete(bookingId);
            if (!booking) {
                throw new Error('Booking not found');
            }
            return booking;
        }
        catch (error) {
            throw new Error('Error deleting booking: ' + error.message);
        }
    }
    async getBookingsByUserId(userId) {
        try {
            const bookings = await Booking.find({ user: userId });
            return bookings;
        } catch (error) {
            throw new Error('Error fetching bookings: ' + error.message);
        }
    }
}
module.exports = new BookingRepo();
