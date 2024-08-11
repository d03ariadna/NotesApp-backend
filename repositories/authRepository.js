const User = require("../models/User");

class AuthRepository {
    async login(userData) {
        const user = await User.findOne({ username: userData.username });

        if (!user) {
            throw new Error("User not found");
        }

        if (user.password !== userData.password) {
            throw new Error("Invalid password");
        }

        return user;
    }

}

module.exports = new AuthRepository();