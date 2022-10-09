import React, { PureComponent } from 'react';
import style from './Layout.module.css';

export default class Items extends PureComponent {
    render() {
        return (
            <div className={style.product}>
                <img src={this.props.product.image} alt="" />
                <div>
                    <span>
                        {this.props.product.nameOfProduct}
                    </span>
                </div>
            </div>
        )
    }
}
