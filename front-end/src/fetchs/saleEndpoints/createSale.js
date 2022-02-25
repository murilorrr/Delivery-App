import api from '../api';

async function createSale(sale) {
  const saleResult = await api
    .post('/sales', sale)
    .then((response) => (response.data))
    .catch((err) => (err.response.data.message));
  return saleResult;
}

export default createSale;
