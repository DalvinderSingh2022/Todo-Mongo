const { Router } = require("express");
const userRoutes = require("./user");
const routes = Router();

routes.post('/user', userRoutes);

module.exports = routes;