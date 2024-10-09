import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { getProducts, deleteProduct } from '../services/productService';
import ProductForm from '../components/ProductForm';
import Sidebar from '../components/Sidebar';

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const handleEdit = (id) => {
    const product = products.find((p) => p.id === id);
    setSelectedProduct(product);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'category', headerName: 'Category', width: 150 },
  ];

  return (
    <>
      <Sidebar />
      <div className="products-page">
        <h2>Products</h2>
        <DataTable
          data={products}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        {selectedProduct && <ProductForm product={selectedProduct} setProduct={setSelectedProduct} />}
      </div>
    </>
  );
}

export default Products;