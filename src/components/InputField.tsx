import React, { useRef } from "react";

interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        ref={inputRef}
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 w-3/5 rounded-r-none"
        placeholder="Enter your task"
        required
      />
      <button
        type="submit"
        className="bg-gray-900 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded rounded-l-none"
      >
        Submit
      </button>
    </form>
  );
};

export default InputField;
