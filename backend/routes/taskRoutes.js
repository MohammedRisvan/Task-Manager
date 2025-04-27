const express = require("express");
const {protect, adminOnly}=require("../middlewares/authMiddleware");
const {getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, updateTaskStatus, updateTaskChecklist, deleteTask}=require("../controllers/taskController");

const router = express.Router();

//Task Management Routes 
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); // Get all tasks (Admin: all, Users: assigned)
router.get("/:id", protect, getTaskById); // Get Task By Id
router.post("/", protect, adminOnly, createTask); // Create a Task (Admin only)
router.put("/:id", protect, updateTask); // Update task details
router.delete("/:id", protect, adminOnly, deleteTask); // Delete a `task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); // Update task status
router.put("/:id/todo", protect, updateTaskChecklist);// Update task checklist

module.exports = router;