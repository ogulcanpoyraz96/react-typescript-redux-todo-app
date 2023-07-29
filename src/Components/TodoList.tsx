import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { RootState } from "../store";
import "./TodoList.scss";

const TodoList: React.FC = () => {
  const { todos } = useSelector((state: RootState) => state.todo) as {
    todos: Array<any>;
  };
  return (
    <div className="todos">
      {todos.map((todo: any, key: number) => (
        <TodoItem key={key} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
