import React, { PureComponent } from 'react';
import { Outlet } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';
import ShopIcons from './ShopIcons';
import style from './Layout.module.css';
import { connect } from 'react-redux';
// import store from './store';


class Layout extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            displayIcons: false,
            count: 0,
            productName: React.createRef(),
            productPrice: React.createRef(),
        }
    }

    showDisplayIcons = () => {
        this.setState({ displayIcons: !this.state.displayIcons })
    };

    setMoreCount = () => {
        this.setState({ count: this.state.count + 1 })
    };

    setLessCount = () => {
        if (this.state.count) { this.setState({ count: this.state.count - 1 }) }
    }

    addProduct = () => {
        this.props.addName(this.state.productName.current.value);
    }

    render() {
        return (
            <div className={style.Layout}>
                <div className={style.menu}>
                    <h1>
                        Add product to your cart list
                    </h1>
                    <div className={style.text}>
                        <input type="text" placeholder='Product name' ref={this.state.productName} />
                        <input type="text" placeholder='Product price' ref={this.state.productPrice} />
                    </div>
                    <div className={style.quantity}>
                        <button onClick={this.setMoreCount}>+</button>
                        <span>{this.state.count}</span>
                        <button onClick={this.setLessCount}>-</button>
                    </div>
                    <div className={style.addProduct}>
                        <BsFillCartPlusFill size={40} color='rgb(173, 173, 173)' onClick={this.showDisplayIcons} />
                    </div>
                    <>
                        {this.state.displayIcons && <ShopIcons />}
                    </>
                    <div className={style.addToList}>
                        <button onClick={this.addProduct}>Add to List</button>
                    </div>
                </div>
                <Outlet />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
   addName:(productName)=>{
       dispatch({type: 'ADD_PRODUCT', product: { nameOfProduct: productName}})
   }
})

export default connect (null,mapDispatchToProps)(Layout);