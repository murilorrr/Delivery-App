import api from '../api';

async function deleteUser(token) {
  const userToken = await api
    .delete(`/admin/user/${id}`, {
      headers: { authorization: token },
    })
    .then((response) => (response.data))
    .catch((err) => (err.response.data.message));
  return userToken;
}

export default deleteUser;
