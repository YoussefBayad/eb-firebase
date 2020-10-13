import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Formik, Form , Field,ErrorMessage} from 'formik';
import * as Yup from 'yup';
import ErrorText from '../../components/ErrorMessage'
import { timestamp } from '../../Firebase/utils';
import Modal from '../../components/Modal';
import Button from '../../components/forms/Button';
import AdminProducts from '../../components/AdminProducts';
import Spinner from '../../components/Spinner';
import useFirestoreListener from '../../hooks/useFirestoreListener';
import { addProduct, deleteProduct } from '../../redux/Products/productsSlice';
import './index.scss';
import AdminFilter from '../../components/AdminFilter';

const Admin = (props) => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const toggleModal = () => setShowModal(!showModal);

  const configModal = {
    showModal,
    toggleModal,
  };

  const initialValues = {
    category:'headphones',
    photoURL:    'https://images-na.ssl-images-amazon.com/images/I/41GFa7W547L._AC_SY400_.jpg',
    name: 'Wireless Earpods:  Mini Bluetooth Earpods' ,
    price:82,
    wireless:true,
    wirelessCharging:true,
    waterProof:false,
    fullControl:true,
    eitherBudSolo:true,
    tile:true,
    totalCharge:6,
  }
 
const validationSchema = Yup.object({
  name:Yup.string().required('This field is required'),
  price:Yup.number().min(0).max(500).required('This field is required'),
  totalCharge:Yup.number().min(1).max(48).required('This field is required'),
  photoURL:Yup.string().url().required('This field is required')
})
 

  const onSubmit = (values) => {
    const {category, photoURL, price,name,wireless,wirelessCharging,waterProof,fullControl,eitherBudSolo,tile,totalCharge} = values
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
  setShowModal(false)
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
          <Formik 
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
                >
                  {formik=>(
          <Form>
            <h2>Add new product</h2>
            <div>
            <label htmlFor="category"  >Category</label>
            <Field 
            as='select'
            name='category'
            id='category'
              
            >
              <option value="headphones">Headphones</option>
              <option value="earbuds">Earbuds</option>
              <option value="battery">Battery</option>
            </Field>
            </div>
            <div>
            <label htmlFor='name' >Name</label>
            <Field
              type="text"
              id='name'
              name='name'
            />
            <ErrorMessage name='name' component={ErrorText}/>
            </div>
            <div>
            <label htmlFor='photoURL'>Photo URL</label>
            <Field
              type="url"
              name='photoURL'
              id='photoURL'
              
            />
            <ErrorMessage  name='photoURL' component={ErrorText}/>
            </div>
            <div>
            <label htmlFor='price' >Price</label>
            <Field
              type="number"
              name='price'
              id='price' 
            />
            <ErrorMessage name='price' component={ErrorText}/>
            </div>
            <div>
            <label htmlFor='totalCharge'>Total Charge</label>
            <Field
              type="number"
              name='totalCharge'
              id='totalCharge'
            />
            <ErrorMessage name='totalCharge' component={ErrorText}/>
            </div>
            <label className='checkbox-label' htmlFor='wireless'>Wireless</label>
            <Field
              type="checkbox"
              name='wireless'
              id="wireless"
            />
            {formik.values.category !== 'battery' && (
              <>
                <label className='checkbox-label' htmlFor='waterProof'>Water Prof</label>

                <Field
                type="checkbox"
                name='waterProof'
                id="waterProof"
                  
                />
                <ErrorMessage name='waterProof' component={ErrorText}/>
                <label className='checkbox-label' htmlFor='tile'>Tile</label>
                <Field
                   type="checkbox"
                   name='tile'
                   id="tile"
                  
                />
                <ErrorMessage name='tile' component={ErrorText}/>
                <label className='checkbox-label' htmlFor='fullControl'>fullControl</label>
                <Field
                  type="checkbox"
                  name='fullControl'
                  id="fullControl"
                 
                />
                <ErrorMessage name='fullControl' component={ErrorText}/>
                <label className='checkbox-label' htmlFor='eitherBudSolo'>Either BudSolo</label>
                <Field
                  type="checkbox"
                  name='eitherBudSolo'
                  id="eitherBudSolo"
                  
                />

                <label className='checkbox-label' htmlFor='wirelessCharging'>Wireless Charging</label>
                <Field
                  
                  type="checkbox"
                  name='wirelessCharging'
                  id='wirelessCharging'
                />
              </>
            )}

            <Button type="submit">Add product</Button>
          </Form>
          )}
          </Formik>
        </div>
      </Modal>

      <div className="manageProducts">
        <h1>Manage Products</h1>
        <div className="call-to-actions">
          <Button onClick={() => toggleModal()}>Add new product</Button>
        </div>
        {error && <h2 className="error">{error}</h2>}

        <Spinner status={status} style={{ margin: '5rem auto ' }} />
        <AdminFilter
          initialState={products}
          products={filteredProducts}
          setProducts={setFilteredProducts}
        />
        <AdminProducts
          products={filteredProducts}
          onDeleteProduct={onDeleteProduct}
        />
      </div>
    </div>
  );
};

export default Admin;
