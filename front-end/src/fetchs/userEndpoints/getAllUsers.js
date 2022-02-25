import api from '../api';

async function getAllUsers(token) {
  const result = await api
    .get('/user', {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return result;
}

export default getAllUsers;
