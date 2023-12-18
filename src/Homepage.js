import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Header from "./Header"
import './Homepage.css';
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { click } from "@testing-library/user-event/dist/click";


export default function Homepage() {

    // let scrollContainer = document.querySelector('.media-scroller');

    // scrollContainer.addEventListener('wheel', (evt) => {
    //     evt.preventDefault();
    //     scrollContainer.scrollLeft += evt.deltaY;
    // })

    let [width, setWidth] = useState(1550);



    // const handleScroll = (evt) => {
    //    const x = document.getElementById('media-scroller');
    //    x.scrollLeft += evt.deltaY;
    // }

    const navigate = useNavigate();
    
    let v = document.getElementsByClassName('prod')

    const director = () => {
        console.log('function called');
        navigate('/productpage');
    }
    
    const runner = () =>{
        for(var i = 0; i < v.length; i++){
            v[i].addEventListener('click', director);
        }
    }
    

    // let b = document.getElementById('media-scroller');
    // b.addEventListener('click', director);
    

    useEffect(() => {
        runner()
    },[])

    const rightScroll = () => {
        const x = document.getElementById('media-scroller');
        let z = window.innerWidth;
        width = z;
        console.log(width);
        setWidth(width);
        x.scrollLeft += window.innerWidth;
        x.style.scrollBehavior = 'smooth';
        x.style.scrollSnapAlign = 'start';
        
    }

    const leftScroll = () => {
        const x = document.getElementById('media-scroller');
        x.scrollLeft -= window.innerWidth;
        x.style.scrollBehavior = 'smooth';
        x.style.scrollSnapAlign = 'end';
    }

    const trendingRight = (id) => {
        let x = document.getElementById(id);
        // const y = document.getElementById('trendingSection2');
        console.log(x.offsetWidth); 
        x.scrollLeft += x.offsetWidth;
        x.style.scrollBehavior = 'smooth';

    }

    const trendingLeft = (id) => {
        let x = document.getElementById(id);
        // const y = document.getElementById('trendingSection2');
        x.scrollLeft -= x.offsetWidth;
        x.style.scrollBehavior = 'smooth';
    
    }

    return(
        <Fragment>
            <Header/>
            <div id="media-scroller">
                <button id="leftArrow" onClick={leftScroll}> &larr; </button>
    
                <div className="media-element prod"><img src='5658924.jpg'/></div>
                <div className="media-element prod"><img src='banner2.jpg'/></div>
                <div className="media-element prod"><img src='banner3.jpg'/></div>
                <div className="media-element prod"><img src='winterWear.jpg'/></div>
        
                
                <button id="rightArrow" onClick={rightScroll}> &rarr; </button>                
            </div>
            <br/><br/><br/><br/>

            <div className="rollerDiv">
                <h1 id="Trending">Trending Right Now!!</h1>
                <div id="trendingSection1">
                    <button id="trendingSectionLeft" onClick={() => trendingLeft("trendingSection1")}> &lArr; </button>
                    <div className='trendingSect'>
                        <div><img className="prod" src='winter1.jpg'/></div>
                        <div><img className="prod" src='winter2.jpg'/></div>
                        <div><img className="prod" src='winter3.jpg'/></div>
                        <div><img className="prod" src='winterWear4.jpg'/></div>
                        <div><img className="prod" src='winterWear5.jpg'/></div>
                    </div>

                    <div className='trendingSect'>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                    </div>
                    <button id="trendingSectionRight" onClick={() => trendingRight("trendingSection1")}> &rArr; </button>
                </div>
            </div>

            <br/><br/>

            <div>
                <div id="elecPortal">
                        <img className="prod" id="elecPortalImg" src='5658924.jpg'/>
                        <div id="elecPortalText">Random text describing some stuff</div>
                </div>
            </div>

            <br/><br/>

            <div className="rollerDiv">
                <h1 id="Trending">Check These Out Too!!</h1>
                <div id="trendingSection2">
                    <button id="trendingSectionLeft" onClick={() => trendingLeft('trendingSection2')}> &lArr; </button>
                    <div className='trendingSect'>
                        <div><img className="prod" src='summer1.jpg'/></div>
                        <div><img className="prod" src='summer2.jpg'/></div>
                        <div><img className="prod" src='summer3.jpg'/></div>
                        <div><img className="prod" src='summer4.jpg'/></div>
                        <div><img className="prod" src='summer5.jpg'/></div>
                    </div>

                    <div className='trendingSect'>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                    </div>
                    <button id="trendingSectionRight" onClick={() => trendingRight('trendingSection2')}> &rArr; </button>
                </div>
            </div>

            <br/><br/>
            
            <div>
                <div id="elecPortal">
                        <img className="prod" id="elecPortalImg" src='5658924.jpg'/>
                        <div id="elecPortalText">Random text describing some stuff</div>
                </div>
            </div>

            <br/><br/>


            <div className="rollerDiv">
                <h1 id="Trending">Or maybe these...</h1>
                <div id="trendingSection3">
                    <button id="trendingSectionLeft" onClick={() => trendingLeft('trendingSection3')}> &lArr; </button>
                    <div className='trendingSect'>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                    </div>

                    <div className='trendingSect'>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                        <div><img className="prod" src='5658924.jpg'/></div>
                    </div>
                    <button id="trendingSectionRight" onClick={() => trendingRight('trendingSection3')}> &rArr; </button>
                </div>
            </div>
            <br/>
            <br/>

            <Footer/>
            
            
        </Fragment>

    )    
}