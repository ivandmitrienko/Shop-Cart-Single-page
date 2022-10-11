import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Items from './Items';
import style from './Layout.module.css';

class ProductList extends PureComponent {

  render() {
    return (
      <div className={style.productList} >
        {this.props.products.map((product)=><Items id={Date.now()} key={product.image} product={product}/>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  };
};

export default connect(mapStateToProps, null)(ProductList);
