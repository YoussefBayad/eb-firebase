import React from 'react';

import { useParams } from 'react-router-dom';

import { store } from '../../index';

// component 

import Count from '../../components/ProductCount'

// svg
import wirelessCharging from '../../assets/icon/wirless-charging.webp'
import waterProof from '../../assets/icon/waterproof.webp'
import fullControl from '../../assets/icon/fullcontrol.webp'
import tile from '../../assets/icon/tile.webp'
import eitherBudSolo from '../../assets/icon/either-bud-solo.webp'

import hour40 from '../../assets/icon/40hour.webp'
// style
import "./index.scss"
import AddToCart from '../../components/AddToCart';

const ProductPage = () => {

  // destruct data

  const { id } = useParams();
  const { products } = store.getState();
  const product = products.filter((product) => product.id === Number(id)).[0];

  // check if product in cart destruct count 
  

  return (
    
    <div className="product-showcase">
      <div className="product-intro">
      <div className="product-description">
        <h1>{product.name} </h1>
        <h2>${product.price} usd </h2>
      <div>
      <Count id={product.id} count={product.count} />
      <AddToCart id={product.id} count={product.count}/>
      </div>
      </div>
      <img src={`/img/${product.name.trim()}.webp`} alt={product.name}/>
      </div>
      <div className="product-info">
      <div className="product-info-container">

        {product.wirelessCharging   && 
        <div className="product-icon">
          <img src={wirelessCharging} alt="wireless charging icon"/>
          <h2>Wireless Charging Case</h2>
        </div>

        }
        {product.totalCharge   && 
        <div className="product-icon">
          <img src={hour40} alt="battery icon"/>
          <h2>{product.totalCharge} Hours Total Battery + Rapid Charge</h2>
        </div>

        }
        {product.waterProof   && 
        <div className="product-icon">
          <img src={waterProof} alt="waterProof icon"/>
          <h2>Water and Dust Resistant</h2>
        </div>

        }
        {product.fullControl   && 
        <div className="product-icon">
          <img src={fullControl} alt=" control icon"/>
          <h2> Full Media Controls on Each Bud</h2>
        </div>

        }
        {product.eitherBudSolo   && 
        <div className="product-icon">
          <img src={eitherBudSolo} alt="bud icon"/>
          <h2>Use Either Bud Solo</h2>
        </div>

        }
        {product.tile   && 
        <div className="product-icon">
          <img src={tile} alt="wireless charging icon"/>
          <h2>Find your Earbuds with Tile™</h2>
        </div>

        }
       
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
