import api from '../api';

async function createSale(sale) {
  const saleResult = await api
    .post('/sales', sale)
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return saleResult;
}

export default createSale;
sale
