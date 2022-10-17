import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';
import style from './Layout.module.css';
import Quantity from './Quantity';

export default class Items extends PureComponent {

    // setMoreCount=()=>{
    //     this.setState({count:this.state.count + 1})
    // }

    // setLessCount = () => {
    //     if (this.props.count !== 1) {
    //         this.setState({count:this.state.count - 1})
    //     }
    // };

    render() {
        return (
            <div className={style.product}>
                <img src={this.props.product.image} alt="" />
                <div>
                    <span>
                        {this.props.product.nameOfProduct}
                    </span>
                </div>
                <div>
                    <Quantity
                        setMoreCount={this.setMoreCount}
                        setLessCount={this.setLessCount}
                    >
                        {this.props.product.count}
                    </Quantity>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         product: state.products.products,
//     };
// };

// const mapDispatchToProps = (dispatch) => ({

// });

// export default connect(mapStateToProps, null)(Items);