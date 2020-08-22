/* data */
import data from './data.json';

// assigning products

let products;
const localStorageProducts = JSON.parse(localStorage.getItem('products'));
if (localStorageProducts !== null){
  products = localStorageProducts;
}
else{
  products = data.products;
}


/* Reducer */

const Reducer = (

  // state
  state = {
    

    products: [...products
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
  
  
 
  
  /* remove from cart */

  else if (action.type ===  'removeFromCart') { 
     // clicked product
  let clickedProduct = state.products.filter(
    (product) => product.id === action.id
  ).[0]; 

// reset Count
clickedProduct = {...clickedProduct, count: 0};

//new cart 
const  products = state.products.map((product) => {
  if(    product.id === action.id){
    return clickedProduct;
  }
 return product

});
    
return {...state , products:[...products]};

}
    
/* increment and decrement */

  else if (action.type ===  'incrementCount') {   

  // clicked product
  let clickedProduct = state.products.filter(
      (product) => product.id === action.id
    ).[0]; 

  // incrementing Count
  const count = clickedProduct.count;
  clickedProduct = {...clickedProduct, count: count +1};

  //new cart 
  const  products = state.products.map((product) => {
    if(    product.id === action.id){
      return clickedProduct;
    }
   return product

  });
      
  return {...state , products:[...products]};
  }
     
  else if (action.type ===  'decrementCount') {   
    
    // clicked product
     let clickedProduct = state.products.filter(
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
      const products = state.products.map((product) => {
        if(    product.id === action.id){
          return clickedProduct;
        }
         return product
        }); 

    return {...state , products:[...products]};
     }

  /* payment completed */


  else if (action.type ===  'payment-completed') {   
    
    // new cart
      const products = state.products.map((product) => 
          {return {...product , count:0}})
          localStorage.setItem('products', JSON.stringify(products));

    return {...state , products:[...products]};
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
