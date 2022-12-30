import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Main, Page404, PostList, TodoList, UserList } from 'pages';
import { Navigation } from 'components';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="/users" element={<UserList />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
}

export default App;
