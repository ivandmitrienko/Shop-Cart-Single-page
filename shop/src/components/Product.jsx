import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useParams } from "react-router-dom";
// import style from './Layout.module.css';

export default function Product() {

  const {id} = useParams();
  const product = useSelector(state=>state.products.products.find((product)=>product.id===id));
  // const product = state.find((product)=>product.id===id)
  // const location = useLocation();
  // const { product } = location.state;
  // (state)=>{state.products.find((product)=>product.id===id)}
  // const findProduct = () => {
  //   product.map((product)=>console.log(product.id))
  // };


  
  console.log(product);
  console.log(id);


  return ( 

    
    // <div className={style.itemOfProduct}>
    //   <span>Name of Product: {product.nameOfProduct}</span>
    //   <div className={style.itemOfProduct__img}>
    //     <img src={product.image} alt="" />
    //   </div>
    //   <span>Count: {product.count}</span>
    //   <span>Price: {product.nameOfPrice}$</span>
    //   <span>Total: {product.nameOfPrice * product.count}$</span>
    //   <button>
    <div>ssss
    <NavLink to='/'>Back to List</NavLink>

    </div>
        
    //   </button>
    // </div>
  )
}
