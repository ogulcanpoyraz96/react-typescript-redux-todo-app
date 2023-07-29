import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/TodoSlice";
import { nanoid } from "@reduxjs/toolkit";
import "./AddTodo.scss";
import { IoMdAdd } from "react-icons/io";

interface AddTodoProps {}

const AddTodo: React.FC<AddTodoProps> = ({}) => {
  const [todo, setTodo] = useState<string>("");

  const dispatch = useDispatch();

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: todo,
        done: false,
        id: nanoid(),
      })
    );
    setTodo("");
  };

  return (
    <form onSubmit={submitHandle} className="todo-form">
      <div className="todo-add">
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Enter Todo..."
        />
        <button disabled={!todo}>
          <IoMdAdd className="Add" />
        </button>
      </div>
    </form>
  );
};

export default AddTodo;
