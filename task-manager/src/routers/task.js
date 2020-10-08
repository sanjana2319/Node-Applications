const express = require("express");
const Task = require("../models/task");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const { update } = require("../models/task");
const auth = require("../middleware/auth");

router.post("/tasks", auth, async (req, res) => {
    // const task = new Task(req.body);
    const task = new Task({
        ...req.body,
        owner: req.user._id,
    });
    try {
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get("/tasks", auth, async (req, res) => {
    try {
        const tasks = await Task.find({ owner: req.user._id });
        // or - await req.user.populate("tasks").execPopulate()
        res.send(tasks);
    } catch {
        res.status(500).send;
    }
});

router.get("/tasks/:id", auth, async (req, res) => {
    try {
        const _id = req.params.id;
        const task = await Task.findOne({ _id, owner: req.user._id });
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/tasks/:id", auth, async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["description", "completed"];
    const isValidOperations = updates.every((update) =>
        allowedUpdates.includes(update)
    );
    if (!isValidOperations) {
        return res.status(400).send({ error: "Invalid updates" });
    }
    try {
        const task = await Task.findOne({
            _id: req.params.id,
            owner: req.user._id,
        });
        updates.forEach((update) => (task[update] = req.body[update]));
        await task.save();

        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete("/tasks/me", async (req, res) => {
    try {
        const task = await Task.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id,
        });
        if (!task) {
            res.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

module.exports = router;
