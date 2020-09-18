export default function getProductData(products, cart, id) {
  let product;
  product = cart.find((product) => product.documentID === Number(id));
  if (product === undefined) {
    product = products.find((product) => product.documentID === Number(id));
  }

  return product;
}
