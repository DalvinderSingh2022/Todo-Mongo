const { Router } = require("express");
const taskRoutes = require("./task");
const userRoutes = require("./user");
const routes = Router();

routes.post('/task', taskRoutes);
routes.post('/user', userRoutes);

module.exports = routes;