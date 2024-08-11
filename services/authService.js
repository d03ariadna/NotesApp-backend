const authRepository = require("../repositories/authRepository");

class AuthService{
    async login(user) {
        return await authRepository.login(user);
    }
}


module.exports = new AuthService();