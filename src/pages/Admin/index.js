import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from '../../redux/Products/products.actions';
import Modal from '../../components/Modal';
import FormInput from '../../components/forms/FormInput';
import FormSelect from '../../components/forms/FormSelect';
import Button from '../../components/forms/Button';
import './index.scss';

const Admin = (props) => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [category, setCategory] = useState('headphones');
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [wireless, setWireless] = useState(false);
  const [wirelessCharging, setWirelessCharging] = useState(false);
  const [waterProof, setWaterProof] = useState(false);
  const [fullControl, setFullControl] = useState(false);
  const [eitherBudSolo, setEitherBudSolo] = useState(false);
  const [tile, setTile] = useState(false);
  const [totalCharge, setTotalCharge] = useState(0);

  const toggleModal = () => setShowModal(!showModal);

  const configModal = {
    showModal,
    toggleModal,
  };

  const resetForm = () => {
    setShowModal(false);
    setCategory('headphones');
    setName('');
    setPrice(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProductStart({
      category,
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
      timestamp: new Date(),
    });
    resetForm();
  };

  return (
    <div className="admin">
      <div className="callToActions">
        <ul>
          <li>
            <Button onClick={() => toggleModal()}>Add new product</Button>
          </li>
        </ul>
      </div>

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

            <FormInput label="Main image URL" required />

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
              label="Wirless"
              type="checkbox"
              value={wireless}
              handleChange={(e) => {
                setWireless(e.target.checked);
              }}
            />
            {category !== 'battery' && (
              <>
                <FormInput
                  label="Water Pr0of"
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
        <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>Manage Products</h1>
              </th>
            </tr>
            <tr>
              <td>
                <table
                  className="results"
                  border="0"
                  cellPadding="10"
                  cellSpacing="0"
                >
                  <tbody>
                    {products.map((product, index) => {
                      const { name, price, id } = product;
                      return (
                        <tr>
                          <td>
                            <img
                              className="thumb"
                              src={`/img/${product.name.replace(
                                /\s/g,
                                ''
                              )}.webp`}
                            />
                          </td>
                          <td>{name}</td>
                          <td>${price}</td>
                          <td>
                            <Button>Delete</Button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
