import axios from 'axios';

export const getStores = async () => {
  const response = await axios.get('/api/stores');
  return response.data;
};

export const deleteStore = async (id) => {
  await axios.delete(`/api/stores/${id}`);
};

export const createStore = async (storeData) => {
  await axios.post('/api/stores', storeData);
};

export const updateStore = async (id, storeData) => {
  await axios.put(`/api/stores/${id}`, storeData);
};
