import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import fetchProducts from './fetch';
// import {
//   handleAddProduct,
//   handleDeleteProduct,
// } from '../../redux/Products/products.helpers';
import { timestamp } from '../../Firebase/utils';
import Modal from '../../components/Modal';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import Button from '../../components/forms/Button';
import './index.scss';

const Admin = (props) => {
  const products = useSelector((state) => state.products.data);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('headphones');
  const [photoURL, setPhotoURL] = useState(
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png'
  );
  const [name, setName] = useState('React');
  const [price, setPrice] = useState(0);
  const [wireless, setWireless] = useState(false);
  const [wirelessCharging, setWirelessCharging] = useState(false);
  const [waterProof, setWaterProof] = useState(false);
  const [fullControl, setFullControl] = useState(false);
  const [eitherBudSolo, setEitherBudSolo] = useState(false);
  const [tile, setTile] = useState(false);
  const [totalCharge, setTotalCharge] = useState(1);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleAddProduct({
    //   category,
    //   photoURL,
    //   name,
    //   price,
    //   count: 0,
    //   wireless,
    //   wirelessCharging,
    //   waterProof,
    //   fullControl,
    //   eitherBudSolo,
    //   tile,
    //   totalCharge,
    //   createdAt: timestamp(),
    // });
    resetForm();
  };

  return (
    <div className="admin">
      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>
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
        <div className="admin-products">
          {products.map((product) => {
            const { name, price, documentID, photoURL } = product;
            return (
              <div className="admin-product" key={documentID}>
                <img
                  className="thumb"
                  src={
                    product.photoURL
                      ? product.photoURL
                      : `/img/${product.name.replace(/\s/g, '')}.webp`
                  }
                  alt={name}
                />

                <h2>{name}</h2>
                <h2>${price}</h2>
                <Button>Delete</Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
