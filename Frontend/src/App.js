// import { useState } from "react";
import "./App.css";
import InputTodos from "./components/inputTodos";
import ListTodos from "./components/listTodos";

function App() {
  return (
    <div>
      <h1 className="text-center">Pern Todo</h1>
      <div className="container">
        <InputTodos></InputTodos>
        <ListTodos></ListTodos>
      </div>
    </div>
  );
}

export default App;
