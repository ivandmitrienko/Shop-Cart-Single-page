import React, { PureComponent } from 'react';
import style from './Layout.module.css';

export default class Quantity extends PureComponent {
    
    setMoreCount = () => {
        this.setState({ count: this.state.count + 1 })
    };

    setLessCount = () => {
        if (this.state.count!==1) { this.setState({ count: this.state.count - 1 }) }
    };

    render() {
        return (
            <div className={style.quantity}>
                <button onClick={this.setMoreCount}>+</button>
                <span>1</span>
                <button onClick={this.setLessCount}>-</button>
            </div>
        )
    }
}
