import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Items from './Items';
import style from './Layout.module.css';

class ProductList extends PureComponent {

  render() {
    return (
      <div className={style.productList} >
        {this.props.products.map((product, index) => <Items
          key={index}
          product={product}
          index={index}
        />)}
        {this.props.products.length ?
          <div className={style.totalPrice}>
            Total: {this.props.products.reduce((acc, curr) => { return acc + (curr.nameOfPrice * curr.count) }, 0)}$
          </div> :
          null
        }
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
