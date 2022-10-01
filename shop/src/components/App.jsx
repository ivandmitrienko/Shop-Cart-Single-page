import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import ProductList from './ProductList';
import Layout from './Layout';
import Product from './Product';
import style from './App.module.css';

export default class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      first: 1
    }
  }
  render() {
    return (
      <div className={style.App}>
       <Routes>
         <Route path='/' element={<Layout/>} />
         <Route index element={<ProductList/>} />
         <Route path='/ProductDescription' element={<Product/>} />
       </Routes>

      </div>
    )
  }
}
