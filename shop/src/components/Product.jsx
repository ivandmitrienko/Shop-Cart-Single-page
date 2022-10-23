import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from "react-router-dom";
import style from './Layout.module.css';

export default function Product() {

  const { id } = useParams();
  const product = useSelector(
    state => {
      return state.products.products.find(
        product => product.id === parseInt(id)
      )
    }
  );

  return (
    <div className={style.itemOfProduct}>
      <span>Name of Product: {product.nameOfProduct}</span>
      <div className={style.itemOfImg}>
        <img src={product.image} alt="" />
      </div>
      <span>Count: {product.count}</span>
      <span>Price: {product.nameOfPrice}$</span>
      <span>Total: {product.nameOfPrice * product.count}$</span>
      <button><NavLink to='/'>Back to List</NavLink> </button>
    </div>
  )
}
