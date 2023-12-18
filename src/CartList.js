import React, { Fragment } from "react";
import './CartList.css';

export default function CartList () {
    return(
        <Fragment>
            <div id="cartList">
                <div id="ProductContainer">
                    <div className="productDiv">
                        <h2 className="productName">Product 1</h2>
                        <img className="productImg" src="summer1.jpg"/>
                        <span className="dustbin">&#128465;</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}