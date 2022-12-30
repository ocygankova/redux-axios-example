import { dataFetch } from 'utils';

const postsAPI = {
  fetchPosts() {
    return dataFetch.get('/posts');
  }
};

export default postsAPI;
