import React from 'react';
import { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import { getStores, deleteStore } from '../services/storeService';
import StoreForm from '../components/StoreForm';
import Sidebar from '../components/Sidebar';

function Stores() {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    const data = await getStores();
    setStores(data);
  };

  const handleEdit = (id) => {
    const store = stores.find((s) => s.id === id);
    setSelectedStore(store);
  };

  const handleDelete = async (id) => {
    await deleteStore(id);
    fetchStores();
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'mall', headerName: 'Mall', width: 200 },
  ];

  return (
    <>
      <Sidebar />
      <div className="stores-page">
        <h2>Stores</h2>
        <DataTable
          data={stores}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        {selectedStore && <StoreForm store={selectedStore} setStore={setSelectedStore} />}
      </div>
    </>
  );
}

export default Stores;