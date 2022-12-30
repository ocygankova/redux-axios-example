import { hideLoader, receiveUsers, showLoader } from '../reducers/usersSlice';

import usersAPI from '../api/usersAPI';

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const res = await usersAPI.fetchUsers();
    dispatch(receiveUsers(res));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(hideLoader());
  }
};
