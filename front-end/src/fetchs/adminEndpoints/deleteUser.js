import api from '../api';

async function deleteUser(id) {
  const userToken = await api
    .delete(`/admin/user/${id}`)
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return userToken;
}

export default deleteUser;
