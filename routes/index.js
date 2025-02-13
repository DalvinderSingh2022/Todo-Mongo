const { Router } = require("express");
const taskRoutes = require("./task");
const userRoutes = require("./user");
const routes = Router();

routes.use('/task', taskRoutes);
routes.use('/user', userRoutes);

module.exports = routes;