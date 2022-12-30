import { combineReducers } from '@reduxjs/toolkit';

import postsReducer from './reducers/postsSlice';
import todosReducer from './reducers/todosSlice';
import usersReducer from './reducers/usersSlice';

const rootReducer = combineReducers({
  posts: postsReducer,
  todos: todosReducer,
  users: usersReducer
});

export default rootReducer;
