import { Fragment } from "react";
import { useState } from "react";

const InputTodos = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleAddClick = async (e) => {
    e.preventDefault();
    try {
      const body = { description: inputValue };
      const response = await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      // console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center">Input Todos</h1>
      <form className="d-flex">
        <input
          className="form-control"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="btn btn-success" onClick={handleAddClick}>
          Add
        </button>
      </form>
    </Fragment>
  );
};

export default InputTodos;
