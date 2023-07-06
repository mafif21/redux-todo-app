import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/todo";
import favoriteReducer from "../features/favorite";

export const store = configureStore({
  reducer: {
    task: taskReducer,
    favorite: favoriteReducer,
  },
});
