import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  todosData: []
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    showLoader(state) {
      state.isLoading = true;
    },
    hideLoader(state) {
      state.isLoading = false;
    },
    receiveTodos(state, action) {
      state.todosData = action.payload;
    }
  }
});

export const { showLoader, hideLoader, receiveTodos } = todosSlice.actions;

export default todosSlice.reducer;
