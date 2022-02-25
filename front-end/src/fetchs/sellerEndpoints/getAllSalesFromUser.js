import api from '../api';

async function getAllSales(token) {
  const sales = await api
    .get('/sales', {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => (response.data))
    .catch((err) => (err.response.data.message));
  return sales;
}

export default getAllSales;
