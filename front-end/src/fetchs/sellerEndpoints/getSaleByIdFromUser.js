import api from '../api';

async function getSaleById(token, id) {
  const saleDetails = await api
    .get(`/orders/${id}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => ({ data: response.data }))
    .catch((err) => ({ error: err.response.data.message }));
  return saleDetails;
}

export default getSaleById;
