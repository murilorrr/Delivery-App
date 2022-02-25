import api from '../api';

async function loginUser(sale) {
  const token = await api
    .post('/sales', sale)
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return token;
}

export default loginUser;
