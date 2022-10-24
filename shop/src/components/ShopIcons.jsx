import React, { PureComponent } from 'react';
import { images } from '../images.js';
import style from './ShopIcons.module.css';

export default class ShopIcons extends PureComponent {
    
    render() {
        return (
            <div className={style.icons}>
                {images.map((image) => <img src={image} key={image} alt='' onClick={()=>this.props.setImage(image)} />)}
            </div>
        )
    }
}


