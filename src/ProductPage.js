import React from "react";
import Header from './Header';
import { Fragment } from "react";
import './ProductPage.css';

export default function ProductPage () {
    return(
        <Fragment>
            <Header/>
            <h2>Product Title</h2>
            <div id="productContainer">
                <div id="Container">
                    <div id="gridContainer">
                        <div className="gridItem" id="item1">
                            <img src="5658924.jpg"/>
                        </div>
                        <div className="gridItem" id="item2">
                            <img src="5658924.jpg"/>
                        </div>
                        <div className="gridItem" id="item3">
                            <img src="5658924.jpg"/>
                        </div>
                        <div className="gridItem" id="mainItem">
                            <img src="5658924.jpg"/>
                        </div>
                    </div>
                </div>

                <div id="productDescription">
                    haha lol
                </div>
            </div>
        </Fragment>
    )
}