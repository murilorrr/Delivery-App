import api from '../api';

async function createSale(sale) {
  const sale = await api
    .post('/sales', sale)
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return sale;
}

export default createSale;
