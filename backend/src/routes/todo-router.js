import { Router } from "express";
import {
  allTodoList,
  createTodo,
  deleteTodo,
  updateTodo,
} from "../controllers/todo-controller.js";

const todoRouter = Router();

todoRouter.route("/getAllTodo").get(allTodoList);
todoRouter.route("/create").post(createTodo);
todoRouter.route("/delete/:id").delete(deleteTodo);
todoRouter.route("/update/:id").put(updateTodo);

export default todoRouter;
