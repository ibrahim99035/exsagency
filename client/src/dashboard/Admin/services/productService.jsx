import axios from 'axios';

export const getProducts = async () => {
  const response = await axios.get('/api/products');
  return response.data;
};

export const deleteProduct = async (id) => {
  await axios.delete(`/api/products/${id}`);
};

export const createProduct = async (productData) => {
  await axios.post('/api/products', productData);
};

export const updateProduct = async (id, productData) => {
  await axios.put(`/api/products/${id}`, productData);
};