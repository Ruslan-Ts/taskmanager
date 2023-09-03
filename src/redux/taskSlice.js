import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operation';

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchTasks.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [addTask.pending](state) {
      state.isLoading = true;
    },
    [addTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addTask.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteTask.pending](state) {
      state.isLoading = true;
    },
    [deleteTask.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(index, 1);
    },
    [deleteTask.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
    [toggleCompleted.pending](state) {
      state.isLoading = true;
    },
    [toggleCompleted.fulfilled](state, { payload }) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(task => task.id === payload.id);
      state.items.splice(index, 1, payload);
    },
    [toggleCompleted.rejected](state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
