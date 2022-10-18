import React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import style from './Layout.module.css';

export default function Product() {

  const location = useLocation();
  const { product } = location.state;

  return (
    <div className={style.itemOfProduct}>
      <span>Name of Product: {product.nameOfProduct}</span>
      <div className={style.itemOfProduct__img}>
        <img src={product.image} alt="" />
      </div>
      <span>Count: {product.count}</span>
      <span>Price: {product.nameOfPrice}$</span>
      <span>Total: {product.nameOfPrice * product.count}$</span>
      <button>
        <NavLink to='/'>Back to List</NavLink>
      </button>
    </div>
  )
}
