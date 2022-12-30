import { showLoader, hideLoader, receiveTodos } from '../reducers/todosSlice';

import todosAPI from '../api/todosAPI';

export const getTodos = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const res = await todosAPI.fetchTodos();
    dispatch(receiveTodos(res));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(hideLoader());
  }
};
