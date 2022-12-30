import { receivePosts, showLoader, hideLoader } from '../reducers/postsSlice';

import postsAPI from '../api/postsAPI';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch(showLoader());
    const res = await postsAPI.fetchPosts();
    dispatch(receivePosts(res));
  } catch (err) {
    console.log(err);
  } finally {
    dispatch(hideLoader());
  }
};
