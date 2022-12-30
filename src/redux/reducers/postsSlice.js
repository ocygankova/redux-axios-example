import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  postsData: []
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    showLoader(state) {
      state.isLoading = true;
    },
    hideLoader(state) {
      state.isLoading = false;
    },
    receivePosts(state, action) {
      state.postsData = action.payload;
    }
  }
});

export const { receivePosts, showLoader, hideLoader } = postsSlice.actions;

export default postsSlice.reducer;
