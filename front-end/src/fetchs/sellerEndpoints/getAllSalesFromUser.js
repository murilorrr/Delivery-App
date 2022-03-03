import api from '../api';

async function getAllSales(token) {
  const sales = await api
    .get('/customer/sales', {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => (response.data))
    .catch((err) => ({ error: err.response.data.message }));
  return sales;
}

export default getAllSales;
