const User = require("../models/User");
class UserRepo {

    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            throw new Error("Error creating user: " + error.message);
        }
    }

    async getUserById(userId) {
        try {
            const user = await User.findById(userId);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw new Error("Error fetching user: " + error.message);
        }
    }

    async updateUser(userId, updateData) {
        try {
            const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw new Error("Error updating user: " + error.message);
        }
    }

    async deleteUser(userId) {
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) {
                throw new Error("User not found");
            }
            return user;
        } catch (error) {
            throw new Error("Error deleting user: " + error.message);
        }
    }
}

module.exports = new UserRepo();