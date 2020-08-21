// import React, { useEffect, createRef } from 'react';
// import { store } from '../index';
// const useOutsideAlerter = () => {
//   const cartElement = document.getElementsByClassName('cart');
//   // const ref = createRef(cartElement);
//   // console.log(ref.[0]);
//   // console.log(cartElement);

//   const handleClickOutside = (e) => {
//     console.log('handle click');
//     console.log(cartElement.classList.contains(e.target));
//     if (cartElement.classList.contains(e.target)) {
//       console.log('dispatched');
//       store.dispatch({ type: 'openCart' });
//     }
//   };

//   useEffect(() => {
//     console.log('set listener');

//     document.addEventListener('click', handleClickOutside, true);

//     return () => {
//       document.removeEventListener('click', handleClickOutside, true);
//     };
//   }, [cartElement]);

//   return cartElement;
// };

// export default useOutsideAlerter;
