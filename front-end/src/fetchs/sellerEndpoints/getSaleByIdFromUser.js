import api from '../api';

async function createUser(token, id) {
  const result = await api
    .get(`/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return result;
}

export default createUser;
