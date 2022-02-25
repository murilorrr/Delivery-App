import axios from '../axios';

const createUser = async ({ name, email, password }) => {
  const { data } = await axios.post('/user', { name, email, password });
  return data;
};

export default createUser;
