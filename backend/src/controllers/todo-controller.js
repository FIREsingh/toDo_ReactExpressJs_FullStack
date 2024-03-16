import { ToDo } from "../models/todo-model.js";

//============== fetch toDOs ==================
const allTodoList = async (req, res) => {
  try {
    //fetch todo list from the database.
    const toDos = await ToDo.find();
    //response
    res.status(200).json({
      success: true,
      data: toDos,
      message: "All data has fetched successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Error",
      message: err.message,
    });
  }
};

//============== create/add toDos =================
const createTodo = async (req, res) => {
  try {
    //fetch data from req body
    const { description } = req.body;

    if (!description) {
      res.status(500).json({
        success: false,
        data: "Cant be empty",
        message: err.message,
      });
    }

    //create new todo
    const response = ToDo.create({ description });

    //send a res
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry recorded successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "Error",
      message: err.message,
    });
  }
};
//============== delete toDos =================
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await ToDo.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "toDo deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
//============== update/edit toDos ===================
const updateTodo = async (req, res) => {
  try {
    //fetch data from body
    const { id } = req.params;
    const { description } = req.body;

    //query to delete
    const todo = await ToDo.findByIdAndUpdate({ _id: id }, { description });
    res.status(200).json({
      success: true,
      data: todo,
      message: "toDo updated successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};
export { allTodoList, createTodo, deleteTodo, updateTodo };
