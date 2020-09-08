import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from '../../redux/Products/products.actions';
import { handleAddProduct } from '../../redux/Products/products.helpers';
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

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

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
    console.log(wireless);

    handleAddProduct({
      category,
      name,
      price,
      count: 0,
      wireless,
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
              label="Wirless"
              type="checkbox"
              value={wireless}
              handleChange={(e) => {
                setWireless(e.target.checked);
              }}
            />
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
                            <Button
                              onClick={() => dispatch(deleteProductStart(id))}
                            >
                              Delete
                            </Button>
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
