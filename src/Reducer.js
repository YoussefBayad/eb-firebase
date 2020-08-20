/* data */
import data from './data.json';

/* Reducer */

const Reducer = (

  // state
  state = {
    ...data,

    cart: [
     ...JSON.parse(localStorage.getItem('cart'))
    ],

    openCart: false,
   },
  
  action


) => {
  
  /* sort */ 

  if (action.type === 'latest') {
   
      const latest = state.products
        .slice()
        .sort((a, b) => (a.id > b.id ? 1 : -1));
      return { ...state, products: latest };
    }

  else if (action.type === 'lowest'){
      const lowest = state.products
      .slice()
      .sort((a, b) => (a.price > b.price ? 1 : -1));
    return { ...state, products: lowest }
   }

  else if (action.type ===  'highest'){
    const highest = state.products
      .slice()
      .sort((a, b) => (a.price < b.price ? 1 : -1));

    return { ...state, products: highest }
  }
  
  
  /*add to cart   */ 

  else if (action.type ===  'addToCart')
  {
    const clickedProduct = state.products.filter(
      (product) => product.id === action.id
    );
    const product = clickedProduct[0];
    return {
      ...state,
      cart: [...state.cart, { ...product, count: 1 }],
    }
  }
  
  /* remove from cart */

  else if (action.type ===  'removeFromCart') {  const newCart = state.cart.filter((product) => product.id !== action.id);
    return { ...state, cart: newCart };
    }
    
/* increment and decrement */

  else if (action.type ===  'incrementCount') {   

  // clicked product
  let clickedProduct = state.cart.filter(
      (product) => product.id === action.id
    ).[0]; 

  // incrementing Count
  const count = clickedProduct.count;
  clickedProduct = {...clickedProduct, count: count +1};

  //new cart 
  const  newCart = state.cart.map((product) => {
    if(    product.id === action.id){
      return clickedProduct;
    }
   return product

  });
      
  return {...state , cart:[...newCart]};
  }
     
  else if (action.type ===  'decrementCount') {   
    
    // clicked product
     let clickedProduct = state.cart.filter(
        (product) => product.id === action.id
      ).[0]; 

    // preventing count from < 0 values
      const count = clickedProduct.count;
      if (count === 0){
        clickedProduct = {...clickedProduct, count: 0};
      }
      else{
        clickedProduct = {...clickedProduct, count: count -1};

      }

    // new cart
      const  newCart = state.cart.map((product) => {
        if(    product.id === action.id){
          return clickedProduct;
        }
         return product
        }); 

    return {...state , cart:[...newCart]};
     }

     /* open Cart */
     
  else if (action.type ===  'openCart') {   
      
      return { ...state, openCart: !state.openCart }}


   else
   {
    return state;
   }
      
  
};

export default Reducer;
