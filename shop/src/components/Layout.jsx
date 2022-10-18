import React, { PureComponent } from 'react';
import { Outlet } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';
import ShopIcons from './ShopIcons';
import Quantity from './Quantity';
import style from './Layout.module.css';
import { connect } from 'react-redux';
import * as consts from './actions/actions';

class Layout extends PureComponent {

    constructor(props) {
        super(props)
        this.state = {
            displayIcons: false,
            image: null,
        }
    }

    showDisplayIcons = () => {
        if (isNaN(this.productPrice.value)) {
            alert('price is number !!!');
            return;
        }
        if (this.productName.value) {
            this.setState({
                displayIcons: !this.state.displayIcons,
            });
        }
    };

    setMoreCount = () => {
        this.props.addCount();
    };

    setLessCount = () => {
        if (this.props.count !== 1) {
            this.props.reduceCount();
        }
    };

    addProduct = () => {
        if (this.state.image) {
            this.props.addName(
                this.productName.value,
                this.productPrice.value,
                this.state.image,
                this.props.count,
            );
            this.productName.value = '';
            this.productPrice.value = '';
            this.setState({
                image: null,
            });
        }
    }

    setImage = (picture) => {
        this.setState({
            image: picture,
            displayIcons: !this.state.displayIcons,
        })
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
                        setLessCount ={this.setLessCount}
                    >
                        {this.props.count}
                    </ Quantity>
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
    addName: (productName, price, picture, count) => {
        dispatch({
            type: consts.ADD_PRODUCT,
            product: {
                nameOfProduct: productName,
                nameOfPrice: price,
                image: picture,
                count: count
            }
        });
        dispatch({
            type: consts.RESTART_COUNT,
        });
    },
    addCount: () => {
        dispatch({ type: consts.ADD_PRICE })
    },
    reduceCount: () => {
        dispatch({ type: consts.REDUCE_PRICE })
    },
});

const mapStateToProps = (state) => {
    return {
        count: state.count.count,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);