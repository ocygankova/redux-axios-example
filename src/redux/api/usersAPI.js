import { dataFetch } from '../../utils/axios';

const usersAPI = {
  fetchUsers() {
    return dataFetch.get('/users');
  }
};

export default usersAPI;
