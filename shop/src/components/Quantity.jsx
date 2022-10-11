import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import style from './Layout.module.css';

class Quantity extends PureComponent {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count: this.props.count,
    //   }
    // }
    
    setMoreCount = () => {
        this.props.addCount();
    };

    setLessCount = () => {
        if (this.props.count!==1) { this.props.reduceCount() }
    };

    render() {
        return (
            <div className={style.quantity}>
                <button onClick={this.setMoreCount}>+</button>
                <span>{this.props.count}</span>
                <button onClick={this.setLessCount}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      count: state.count.price
    };
};

const mapDispatchToProps = (dispatch) => ({
    addCount: () => {
        dispatch({ type: 'ADD_PRICE'})
    },
    reduceCount: () => {
        dispatch({ type: 'REDUCE_PRICE'})
    },
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Quantity);
