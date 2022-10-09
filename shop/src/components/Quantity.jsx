import React, { PureComponent } from 'react';
import style from './Layout.module.css';

export default class Quantity extends PureComponent {
    render() {
        return (
            <div className={style.quantity}>
                <button onClick={this.props.setMoreCount}>+</button>
                {this.props.children}
                <button onClick={this.props.setLessCount}>-</button>
            </div>
        )
    }
}
