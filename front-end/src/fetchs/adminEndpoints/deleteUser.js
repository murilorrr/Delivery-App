import api from '../api';

async function deleteUser(token) {
  const userToken = await api
    .delete(`/admin/user/${id}`, {
      headers: { authorization: token },
    })
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return userToken;
}

export default deleteUser;
