const mongoose = require("mongoose");
const Task = require("../models/task.model");

const getTasks = async (req, res) => {
    const { userId } = req.user;

    try {
        const tasks = await Task.find({ userId });
        res.status(200).json({ data: tasks, message: 'Tasks retrieved successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error", error });
    }
};

const createTask = async (req, res) => {
    const { title, description } = req.body;
    const { userId } = req.user;

    if (!title || !description) {
        return res.status(400).json({ message: 'Title and description are required' });
    }

    const task = new Task({ title, description, userId });

    try {
        const newTask = await task.save();
        res.status(201).json({ data: newTask, message: 'Task created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message || "Internal Server Error", error });
    }
};

const updateTask = async (req, res) => {
    const { completed } = req.body;
    const { id } = req.params;
    const { userId } = req.user;

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ message: 'Please provide valid value for completed' });
    }

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    try {
        const task = await Task.findOneAndUpdate(
            { _id: id, userId },
            { completed },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ data: task, message: 'Task updated successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message || "Internal Server Error", error });
    }
};

const deleteTask = async (req, res) => {
    const { id } = req.params;
    const { userId } = req.user;

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid task ID' });
    }

    try {
        const task = await Task.findOneAndDelete({ _id: id, userId });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message || "Internal Server Error", error });
    }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };