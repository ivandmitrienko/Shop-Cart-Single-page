import React, { PureComponent } from 'react';
import { Outlet } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';
import ShopIcons from './ShopIcons';
import Quantity from './Quantity';
import style from './Layout.module.css';
import { connect } from 'react-redux';

class Layout extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            displayIcons: false,
            count: 0,
            image: null,
        }
    }



    showDisplayIcons = () => {
        if (this.productName.value && this.productPrice.value && this.state.count) {
            this.setState({ displayIcons: !this.state.displayIcons })
        }
    };

    setMoreCount = () => {
        this.setState({ count: this.state.count + 1 })
    };

    setLessCount = () => {
        if (this.state.count) { this.setState({ count: this.state.count - 1 }) }
    }

    addProduct = () => {
        if (this.state.image) {
            this.props.addName(
                this.productName.value,
                this.productPrice.value,
                this.state.count,
                this.state.image,
            );
            this.productName.value = '';
            this.productPrice.value = '';
            this.setState({ count: 0, image: null })
        }
    }

    setImage = (picture) => {
        this.setState({ image: picture, displayIcons: !this.state.displayIcons })
    }

    render() {
        return (
            <div className={style.Layout}>
                <div className={style.menu}>
                    <h1>
                        Add product to your cart list
                    </h1>
                    <div className={style.text}>
                        <input type="text" placeholder='Product name' ref={(input) => { this.productName = input }} />
                        <input type="text" placeholder='Product price' ref={(input) => { this.productPrice = input }} />
                    </div>
                    <Quantity
                        setMoreCount={this.setMoreCount}
                        setLessCount={this.setLessCount}
                    >
                    <span>{this.state.count}</span>
                    </Quantity>
                    <div className={style.addicons}>
                        <BsFillCartPlusFill size={40} color='rgb(173, 173, 173)' onClick={this.showDisplayIcons} />
                    </div>
                    <>
                        {this.state.displayIcons && <ShopIcons setImage={this.setImage} />}
                    </>
                    <div className={style.addToList}>
                        <button style={{ cursor: `${this.state.image ? 'pointer' : 'not-allowed'}` }} onClick={this.addProduct}>Add to List</button>
                    </div>
                </div>
                <Outlet />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addName: (productName, price, count, picture) => {
        dispatch({ type: 'ADD_PRODUCT', product: { nameOfProduct: productName, nameOfPrice: price, quantity: count, image: picture } })
    }
})

export default connect(null, mapDispatchToProps)(Layout);