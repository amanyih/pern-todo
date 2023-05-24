const pool = require("../db");

exports.getAllTodos = async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json({
      status: "success",
      results: allTodos.rows.length,
      data: {
        todos: allTodos.rows,
      },
    });
  } catch (err) {
    console.error(err.message);
  }
};

exports.getTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json({ status: "success", data: { todo: todo.rows[0] } });
  } catch (err) {
    console.error(err.message);
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json({ status: "success", data: { todo: newTodo.rows[0] } });
  } catch (err) {
    console.error(err.message);
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json({ status: "success", data: { todo: todo.rows[0] } });
  } catch (err) {}
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json({ status: "success" });
  } catch {
    console.error(err.message);
  }
};
