import api from '../api';

async function createAnyUser(user) {
  const userToken = await api
    .post('/admin/user', user)
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return userToken;
}

export default createAnyUser;
