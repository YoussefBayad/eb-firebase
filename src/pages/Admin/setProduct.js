import { firestore } from '../../Firebase/utils';

export const setProduct = async (product) => {
  await firestore
    .collection('products')
    .doc()
    .set(product)
    .then(() => console.log('done'))
    .catch((err) => console.log(err));
};
