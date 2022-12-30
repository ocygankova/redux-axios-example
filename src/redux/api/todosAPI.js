import { dataFetch } from 'utils';

const todosAPI = {
  fetchTodos() {
    return dataFetch.get('/todos');
  }
};

export default todosAPI;
