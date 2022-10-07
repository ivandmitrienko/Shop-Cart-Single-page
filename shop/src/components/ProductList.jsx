import React, { PureComponent } from 'react';

export default class ProductList extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       first:1,
    }
  }


  render() {
    return (
      <div>
        afafaf
       {this.props.productName}
      </div>
    )
  }
}
