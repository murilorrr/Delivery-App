import api from '../api';

async function createAnyUser(user, token) {
  const userToken = await api
    .post('/admin/user', user, {
      headers: { authorization: token },
    })
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return userToken;
}

export default createAnyUser;
