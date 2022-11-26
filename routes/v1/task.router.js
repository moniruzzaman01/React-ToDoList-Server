const express = require("express");
const taskController = require("../../controller/task.controller");
const router = express.Router();

router.route("/tasks").post(taskController.addTasks);
router.route("/tasks/:email").get(taskController.getTasksByEmail);
router.route("/allTasks").get(taskController.getAllTasks);
router.route("/tasks/:id").delete(taskController.deleteTasksById);

module.exports = router;
