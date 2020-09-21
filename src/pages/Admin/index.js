import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timestamp } from '../../Firebase/utils';
import Modal from '../../components/Modal';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import Button from '../../components/forms/Button';
import AdminProducts from '../../components/AdminProducts';
import Spinner from '../../components/Spinner';
import useFirestoreListener from '../../hooks/useFirestoreListener';
import { addProduct, deleteProduct } from '../../redux/Products/productsSlice';
import './index.scss';
import useFormInput from '../../hooks/useFormInput';
import { firestore } from '../../Firebase/utils';

const Admin = (props) => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  // const category = useFormInput()
  const [category, setCategory] = useState('headphones');

  const [showModal, setShowModal] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    'https://images-na.ssl-images-amazon.com/images/I/41GFa7W547L._AC_SY400_.jpg'
  );
  const [name, setName] = useState('Wireless Earpods:  Mini Bluetooth Earbds');
  const [price, setPrice] = useState(82);
  const [wireless, setWireless] = useState(false);
  const [wirelessCharging, setWirelessCharging] = useState(false);
  const [waterProof, setWaterProof] = useState(false);
  const [fullControl, setFullControl] = useState(false);
  const [eitherBudSolo, setEitherBudSolo] = useState(false);
  const [tile, setTile] = useState(false);
  const [totalCharge, setTotalCharge] = useState(1);
  const [error, setError] = useState(null);

  const toggleModal = () => setShowModal(!showModal);

  const configModal = {
    showModal,
    toggleModal,
  };

  const resetForm = () => {
    setShowModal(false);
    setCategory('headphones');
    setName('');
    setPhotoURL(null);
    setPrice(0);
  };

  const onAddProduct = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({
        category,
        photoURL,
        name,
        price,
        count: 0,
        wireless,
        wirelessCharging,
        waterProof,
        fullControl,
        eitherBudSolo,
        tile,
        totalCharge,
        createdAt: timestamp(),
        deleteAble: true,
      })
    );
    resetForm();
  };

  const onDeleteProduct = ({ documentID, deleteAble }) => {
    if (deleteAble === true) {
      dispatch(deleteProduct(documentID));
      setError(null);
    } else {
      setError('You can delete only the products you added');
      setTimeout(() => setError(null), 2000);
    }
  };

  useFirestoreListener(status);
  return (
    <div className="admin">
      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={onAddProduct}>
            <h2>Add new product</h2>

            <FormSelect
              label="Category"
              options={[
                {
                  value: 'headphones',
                  name: 'Headphones',
                },
                {
                  value: 'earbuds',
                  name: 'Earbuds',
                },
                {
                  value: 'Battery',
                  name: 'Battery',
                },
              ]}
              handleChange={(e) => setCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={name}
              handleChange={(e) => setName(e.target.value)}
              required
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={photoURL}
              handleChange={(e) => setPhotoURL(e.target.value)}
              required
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={price}
              handleChange={(e) => setPrice(e.target.value)}
              required
            />

            <FormInput
              label="Total Charge"
              type="number"
              min="1"
              max="100"
              value={totalCharge}
              handleChange={(e) => {
                setTotalCharge(e.target.value);
              }}
            />
            <FormInput
              label="Wireless"
              type="checkbox"
              value={wireless}
              handleChange={(e) => {
                setWireless(e.target.checked);
              }}
            />
            {category !== 'battery' && (
              <>
                <FormInput
                  label="Water Prof"
                  type="checkbox"
                  value={waterProof}
                  handleChange={(e) => {
                    setWaterProof(e.target.checked);
                  }}
                />
                <FormInput
                  label="Tile"
                  type="checkbox"
                  value={tile}
                  handleChange={(e) => {
                    setTile(e.target.checked);
                  }}
                />
                <FormInput
                  label="full Control"
                  type="checkbox"
                  value={fullControl}
                  handleChange={(e) => {
                    setFullControl(e.target.checked);
                  }}
                />
                <FormInput
                  label="either BudSolo"
                  type="checkbox"
                  value={eitherBudSolo}
                  handleChange={(e) => {
                    setEitherBudSolo(e.target.checked);
                  }}
                />
                <FormInput
                  label="Wireless Charging"
                  type="checkbox"
                  value={wirelessCharging}
                  handleChange={(e) => {
                    setWirelessCharging(e.target.checked);
                  }}
                />
              </>
            )}

            <Button type="submit">Add product</Button>
          </form>
        </div>
      </Modal>

      <div className="manageProducts">
        <h1>Manage Products</h1>
        <div className="call-to-actions">
          <Button onClick={() => toggleModal()}>Add new product</Button>
        </div>
        {error && <h2 className="error">{error}</h2>}

        <Spinner status={status} style={{ margin: '5rem auto ' }} />
        <AdminProducts products={products} onDeleteProduct={onDeleteProduct} />
      </div>
    </div>
  );
};

export default Admin;
