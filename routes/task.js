const { Router } = require("express");
const { getTasks, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const authenticateToken = require("../middleware/auth");
const routes = Router();

routes.get('/', authenticateToken, getTasks);
routes.post('/', authenticateToken, createTask);
routes.put('/:id', authenticateToken, updateTask);
routes.delete('/:id', authenticateToken, deleteTask);

module.exports = routes;