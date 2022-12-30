import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  usersData: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    showLoader(state) {
      state.isLoading = true;
    },
    hideLoader(state) {
      state.isLoading = false;
    },
    receiveUsers(state, action) {
      state.usersData = action.payload;
    }
  }
});

export const { hideLoader, receiveUsers, showLoader } = usersSlice.actions;

export default usersSlice.reducer;
