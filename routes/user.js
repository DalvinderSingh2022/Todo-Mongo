const { Router } = require("express");
const { register, login } = require("../controllers/userControllers");
const routes = Router();

routes.post('/register', register);
routes.post('/login', login);

module.exports = routes;