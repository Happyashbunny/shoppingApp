import React from "react";
import "./Header.css";
import CartList from "./CartList";
import { redirect, useNavigate } from "react-router-dom";

export default function Header() {

    let flag = false;

    let nav = useNavigate();

    const redirect = () => {
        nav('/homepage');
    }

    const cartHandler = () => {
        

        let x = document.getElementById('cartList');

        if(flag != true){
            x.style.right = '0%';
            flag = true;
            document.body.style.overflow ='hidden';
        }else{
            x.style.right = '-40%';
            flag = false;
            document.body.style.overflow = 'visible';
            document.body.style.overflowX = 'hidden';
        }
        
    }


    return(
        <div id="header">
            <h1 onClick={redirect}>Everstore</h1>
            <span id="cartBtn" onClick={cartHandler}> &#128722;</span>
            <CartList/>
        </div>
    )
}