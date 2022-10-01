import React, { PureComponent } from 'react';
import { NavLink, Outlet } from "react-router-dom";


export default class Layout extends PureComponent {
    render() {
        return (
            <>
                <div>
                   <ProductList/>
                </div>
                <Outlet />
            </>


            // <div>
            //     <div>
            //         <NavLink to='/'>go</NavLink>
            //     </div>
            //     <>
            //         
            //     </>
            // </div>
        )
    }
}
