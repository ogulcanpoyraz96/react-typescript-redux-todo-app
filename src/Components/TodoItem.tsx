import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { LiaEdit } from "react-icons/lia";
import { FiCheck } from "react-icons/fi";

import { Todo } from "../store/TodoSlice";
import { deleteTodo, editTodo } from "../store/TodoSlice";
import "./TodoItem.scss";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState<Boolean>(false);
  const [value, setValue] = useState<string>("");
  const [checked, isChecked] = useState<boolean>(false);

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editHandle = () => {
    dispatch(
      editTodo({
        id: todo.id,
        title: value,
        done: checked,
      })
    );
    setIsEdit(false);
  };

  return (
    <>
      <div className="todo">
        <div>
          <span
            style={{ textDecoration: todo.done ? "line-through" : "false" }}
          >
            {todo.title}
          </span>
        </div>
        <div>
          <button onClick={() => setIsEdit(!isEdit)}>
            <MdOutlineModeEditOutline className="edit" />
          </button>
          <button onClick={deleteHandle}>
            <MdDeleteOutline className="delete" />
          </button>
        </div>

        <div className="edit">
          {isEdit && (
            <div>
              <div className="edit-todo">
                <input
                  value={value}
                  onChange={e => setValue(e.target.value)}
                  className="edit-write"
                  placeholder="Edit Todo..."
                />
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={e => isChecked(e.target.checked)}
                  className="edit-checked"
                />
                <button
                  className="edit"
                  onClick={() => {
                    editHandle();
                  }}
                >
                  <LiaEdit className="edit" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TodoItem;
