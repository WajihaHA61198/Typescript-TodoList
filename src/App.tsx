import React, { useState } from "react";
import "./App.css";
import { InputField, TodoList } from "./components/index";
import { Todo } from "./models/module";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]); //array pass for all todos list import from module>Todo

  // @-Function
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="bg-fuchsia-50 h-screen">
      <header className="sx:text-4xl md:text-7xl font-semibold text-center py-5 border-b-2 border-b-pink-100 px-4">
        Notify.
      </header>
      <div className="text-center mt-8">
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>

      <div className="mt-12 mx-80">
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
