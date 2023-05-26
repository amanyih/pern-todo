import { useEffect } from "react";
import { useState } from "react";
import EditModal from "./editTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  const handleDeleteClick = async (e) => {
    e.preventDefault();
    const id = e.target.id;
    try {
      const response = await fetch(`http://localhost:3000/todo/${id}`, {
        method: "DELETE",
      });
      console.log(response);
      setTodos(todos.filter((todo) => todo.todo_id !== id));
      // console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const getTodos = async () => {
      try {
        // console.log("getTodos");
        const response = await fetch("http://localhost:3000/todo");
        const jsonData = await response.json();
        console.log(jsonData.data.todos[0]);
        setTodos(jsonData.data.todos);
        console.log(todos);
      } catch (err) {
        setTodos([]);
        console.error(err.message);
      }
    };
    getTodos();
  }, []);
  return (
    <table className="table mt-5">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Description</th>
          <th scope="col">Edit</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => {
          // console.log("todo");
          return (
            <tr>
              <th scope="row">{`${todo.todo_id}`}</th>
              <td>{todo.description}</td>
              <td>
                <EditModal
                  desc={todo.description}
                  id={todo.todo_id}
                  todo={todo}
                ></EditModal>
              </td>
              <td>
                <button
                  id={todo.todo_id}
                  className="btn btn-danger"
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ListTodos;
