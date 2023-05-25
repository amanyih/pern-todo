const express = require("express");

const todoRouter = express.Router();

const todoController = require("../controllers/todoController");

todoRouter
  .route("/")
  .get(todoController.getAllTodos)
  .post(todoController.createTodo);

todoRouter
  .route("/:id")
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = todoRouter;
