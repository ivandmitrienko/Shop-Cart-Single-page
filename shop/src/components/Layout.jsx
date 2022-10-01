import React, { PureComponent } from 'react';
import { Outlet } from "react-router-dom";
import { BsFillCartPlusFill } from 'react-icons/bs';
import style from './Layout.module.css';


export default class Layout extends PureComponent {
    render() {
        return (
            <div className={style.Layout}>
                <div className={style.menu}>
                    <h1>
                       Add product to your cart list
                    </h1>
                    <div className={style.text}>
                        <input type="text" placeholder='Product name'/>
                        <input type="text" placeholder='Product price'/>
                    </div>
                    <div className={style.quantity}>
                        <button>+</button>
                        <span>1</span>
                        <button>-</button>
                    </div>
                    <div className={style.addProduct}>
                        <BsFillCartPlusFill size={40} color='rgb(173, 173, 173)'/>
                    </div>
                    <div className={style.addToList}>
                        <button>Add to List</button>
                    </div>
                </div>
                <Outlet />
            </div>
        )
    }
}
