import React, { useState } from "react";
import Header from './Header';
import { Fragment } from "react";
import './ProductPage.css';
import Footer from './Footer';
import CartList from "./CartList";

export default function ProductPage () {

    let [img, changeImg] = useState('5658924.jpg');

    const hoverHandler = (id, id2) => {
       let x = document.getElementById(id);
       x.style.border = '2px solid black';

       let y = document.getElementById(id2);
       let c = y.getAttribute('src');
       console.log(c);
       changeImg(c);
    }

    const noverHandler = (id) => {
        let x = document.getElementById(id);
        x.style.border = 'none';

        changeImg('5658924.jpg');
    }


    const goBtnHandler = (e) => {
        e.preventDefault();
        let x = document.getElementById("commentInput").value;
        console.log(x);
        document.getElementById('commentSection').innerHTML += '<div class="actualComment"> <text>'+ x +'</text> </div>';
        document.getElementById('commentInput').value = '';
    }

    


    return(
        <Fragment>
            <Header/>
            <h2 id="nameOfProduct">Product Title</h2>
            <div id="productContainer">
                <div id="Container">
                    <div id="gridContainer">
                        <div className="gridItem" id="item1">
                            <img id="Item1" src="summer1.jpg" onMouseEnter={() => hoverHandler('item1', 'Item1')} onMouseLeave={() => noverHandler('item1')}/>
                        </div>
                        <div className="gridItem" id="item2">
                            <img id="Item2" src="summer2.jpg" onMouseEnter={() => hoverHandler('item2', 'Item2')} onMouseLeave={() => noverHandler('item2')}/>
                        </div>
                        <div className="gridItem" id="item3">
                            <img id="Item3" src="summer4.jpg" onMouseEnter={() => hoverHandler('item3', 'Item3')} onMouseLeave={() => noverHandler('item3')}/>
                        </div>
                        <div className="gridItem" id="mainItem">
                            <img id="MainItem" src={img} onMouseEnter={() => hoverHandler('mainItem', 'MainItem')} onMouseLeave={() => noverHandler('mainItem')} />
                        </div>
                    </div>
                </div>

                <div id="productDescription">
                    <p>This particular apparel has so many features that I fail to describe them all within this inadequate premise. But be assured that you are buying a worthy product, perhaps the best one we've ever had. 
                    </p>

                    <button>Buy</button>
                    <button>Add to cart</button>
                </div>
            </div>

            <br/><br/>

            <div id="commentBox">
                <h3>Say what you think about the product!</h3>
                <form>
                    <textarea id="commentInput"/>
                    <button id="submitBtn" onClick={goBtnHandler}>Go!</button>
                </form>
                <h3>Comments</h3>
                <div id="commentSection">
                    <div className="actualComment">
                        <text>I sure am a satisfied customer!</text>
                    </div>
                    <div className="actualComment">
                        <text>Happy over on-time delivery.</text>
                    </div>
                    <div className="actualComment">
                        <text>decent product</text>
                    </div>
                </div>
            </div>

            <br/><br/><br/>

            <Footer/>
        </Fragment>
    )
}