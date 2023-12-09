import React, { Component, Fragment } from "react";
import "./Navigation.css";
import Footer from "./Footer";


export default function Navigation() {

    const loginBtnHndlr = (x) => {

        if(x){
            console.log("opening sign up modal");
            let x = document.getElementById('signUp');
            x.style.top = '50%';
            x.style.position = 'fixed';
        }else{
            console.log("opening log in modal");
            let x = document.getElementById('logIn');
            x.style.top = '50%';
            x.style.position = 'fixed';
        }


        
    };

    const crossBtnHndlr = (x) => {
        if(x){
            let x = document.getElementById('logIn')
            x.style.top = '-50%';
        }else{
            let x = document.getElementById('signUp')
            x.style.top = '-50%';
        }
        
    }

    const lgBtnHndlr = (e) => {
        e.preventDefault();
    }

    const modalCloser = (x) => {
        console.log('modalCloser called');
        if(x){
            let x = document.getElementById('logIn');
            x.style.top = '-50%';
        }else{
            let x = document.getElementById('signUp');
            x.style.top = '-50%'
        }
    }


    return(
        <Fragment>
            <div id='navigationBar'>
                 <span id="mainHeader">
                     Everstore
                 </span>
                 <button className="logButtons" onClick={() => loginBtnHndlr(true)} >Sign Up</button>
                 <button className="logButtons" onClick={() => loginBtnHndlr(false)} >Log in</button>
                 <br/><br/>
                 <img src="5658924.jpg" alt="shopping ad"/>
            </div>
            <div id="logIn">
                <span onClick={() => crossBtnHndlr(true)}>&times;</span>
                <h1>Good to have you back</h1>
                <form id="loginForm" onSubmit={lgBtnHndlr}>
                    <label>Username</label><br/>
                    <input type="text" placeholder="Enter username"></input><br/>
                    <label>Password</label><br/>
                    <input type="password" placeholder="Enter password"></input><br/>
                    <button onClick={() => modalCloser(true)}>Lets go</button>
                </form>
            </div>

            <div id="signUp">
                <span onClick={() => crossBtnHndlr(false)}>&times;</span>
                <h1>Good to have you back</h1>
                <form id="signUpForm" onSubmit={lgBtnHndlr}>
                    <label>Firstname</label><br/>
                    <input type="text" placeholder="Enter first name"></input><br/>
                    <label>Lastname</label><br/>
                    <input type="text" placeholder="Enter last name"></input><br/>
                    <label>Username</label><br/>
                    <input type="text" placeholder="Enter username"></input><br/>
                    <label>Password</label><br/>
                    <input type="password" placeholder="Enter your password"></input>
                    <button onClick={() => modalCloser(false)}>Lets go</button>
                </form>
            </div>

            <Footer/>
        </Fragment>
        
    )
}

// class Navigation extends Component {

//     lginBtnHndlr = () => {
//         let x = document.getElementById('logIn');
//         let top = getComputedStyle(x).top;
//         top = '50%';

//     }


//     render() {


        
//         return(
//             
            
//         )
//     }
// }

// export default Navigation;

