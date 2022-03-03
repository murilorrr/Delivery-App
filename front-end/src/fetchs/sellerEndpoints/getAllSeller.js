import api from '../api';

async function getAllSeller(token) {
  const seller = await api
    .get('/user/seller')
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return seller;
}

export default getAllSeller;
