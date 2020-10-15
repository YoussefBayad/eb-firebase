import React, { useState } from 'react';
import Modal from '../Modal';
import {useDispatch} from 'react-redux';
import edit from './../../assets/icon/edit.svg';
import {editProduct} from '../../redux/Products/productsSlice'


const CreatModal = ({initialValues,task,setError}) => {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    const dispatch = useDispatch()

    const onSubmit = (values) => {
        console.log('values',values)
        console.log('id',values.documentID)
      dispatch(editProduct(values))
      
     }
    const onclick = (deleteAble ) => {
        if (deleteAble === true) {
        toggleModal()
        } else {
        setError('You can edit only the products you added');
        setTimeout(() => setError(null), 2000);
        }
    };
    return (
        <>
            <img className="edit"
              src={edit} alt='edit'
              onClick={()=> onclick(initialValues.deleteAble)}
              />
        <Modal toggleModal={toggleModal} showModal={showModal} initialValues={initialValues} onSubmit={onSubmit} task={task}/>
        </>
    )
}

export default CreatModal
