import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
}

const initialState: { todos: Todo[] } = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = [action.payload, ...state.todos];
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      state.todos = state.todos.map(todo => {
        if (action.payload.id === todo.id) {
          todo.title = action.payload.title;
          todo.done = action.payload.done;
        }
        return todo;
      });
    },
  },
});

export const { addTodo, deleteTodo, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
