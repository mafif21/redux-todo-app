import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getAllTasks = createAsyncThunk("tasks/alltask", async () => {
  const getData = await axios.get("http://localhost:4000/tasks");
  return getData.data;
});

export const createTask = createAsyncThunk(
  "tasks/createtask",
  async ({ task, deadline }) => {
    const getData = await axios.post("http://localhost:4000/tasks", {
      task,
      deadline,
    });
    return getData.data;
  }
);

export const deleteTask = createAsyncThunk("tasks/deletetask", async (id) => {
  await axios.delete(`http://localhost:4000/tasks/${id}`);
  return id;
});

const storage = createEntityAdapter({
  selectId: (task) => task.id,
});

const task = createSlice({
  name: "tasks",
  initialState: storage.getInitialState(),
  extraReducers: {
    [getAllTasks.fulfilled]: (state, action) => {
      storage.setAll(state, action.payload);
    },
    [createTask.fulfilled]: (state, action) => {
      storage.addOne(state, action.payload);
    },
    [deleteTask.fulfilled]: (state, action) => {
      storage.removeOne(state, action.payload);
    },
  },
});

export const storageSelector = storage.getSelectors((state) => state.task);
export default task.reducer;
