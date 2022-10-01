import React, { PureComponent } from 'react';
import { NavLink, Outlet } from "react-router-dom";


export default class Layout extends PureComponent {
    render() {
        return (
            <>
                <div>
                   sgsgsgsgs
                   <NavLink to='/ProductDescription'>go</NavLink>
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
