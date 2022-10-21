import React, { PureComponent } from 'react';
import { Routes, Route } from "react-router-dom";
import ProductList from './ProductList';
import Layout from './Layout';
import style from './App.module.css';
import Product from './Product';

export default class App extends PureComponent {

  render() {
    return (
      <div className={style.App}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path='/ProductDescription/:id' element={<Product />} />
          </Route>
        </Routes>
      </div>
    )
  }
}
