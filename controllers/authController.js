const authService = require("../services/authService");


class AuthController {
  async login(req, res) {
      const user = req.body;

        try {
            const loggedUser = await authService.login(user);
            res.status(201).json({
                ok: true,
                user: loggedUser
            });
        } catch (error) {
            console.log('error: ', error.message);
            res.status(400).json({
                ok: false,
                message: error.message
            });
        }
    }
}

module.exports = new AuthController();