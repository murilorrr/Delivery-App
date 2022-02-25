import api from '../api';

async function createUser(token) {
  const result = await api
    .get('/orders', {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return result;
}

export default createUser;
