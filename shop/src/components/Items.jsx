import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbFileDescription } from 'react-icons/tb'
import style from './Layout.module.css';
import Quantity from './Quantity';
import { NavLink } from 'react-router-dom';
import * as consts from './actions/actions';

class Items extends PureComponent {

    setMoreCount = () => {
        this.props.addCountofProduct(this.props.index);
    }

    setLessCount = () => {
        if (this.props.product.count !== 1) {
            this.props.reduceCountofProduct(this.props.index);
        }
    };

    deleteProduct = () => {
        this.props.deleteProduct(this.props.index);
    }

    render() {
        return (
            <div className={style.product}>
                <img src={this.props.product.image} alt="" />
                <div className={style.countOfProduct}>
                    <div>
                        <span>
                            {this.props.product.nameOfProduct}
                        </span>
                    </div>
                    <Quantity
                        setMoreCount={this.setMoreCount}
                        setLessCount={this.setLessCount}
                    >
                        {this.props.product.count}
                    </Quantity>
                    <div>
                        <span>Total: {this.props.product.nameOfPrice * this.props.product.count}$</span>
                    </div>
                </div>
                <div className={style.closeAndDiscribe}>
                    <AiFillCloseCircle size={25} onClick={this.deleteProduct} />
                    <div className={style.moreInformation}>
                        <NavLink
                            to='./ProductDescription'
                            state={{product:this.props.product}}
                            style={{ color: 'white' }}
                        >
                            <TbFileDescription size={25} />
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addCountofProduct: (index) => {
        dispatch({
            type: consts.ADD_PRODUCT_COUNT,
            index: index
        })
    },
    reduceCountofProduct: (index) => {
        dispatch({
            type: consts.REDUCE_PRODUCT_COUNT,
            index: index
        })
    },
    deleteProduct: (index) => {
        dispatch({
            type: consts.DELETE_PRODUCT,
            index: index
        })
    },
});

export default connect(null, mapDispatchToProps)(Items);