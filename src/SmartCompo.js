import React from "react";
import {
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link,
    BrowserRouter,
    Routes
} from 'react-router-dom';
import Homepage from './Homepage';
import ProductPage from "./ProductPage";
import Navigation from './Navigation';


export default function SmartCompo () {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Navigation/>}>

                </Route>
                <Route path="/homepage" element={<Homepage/>}>

                </Route>
                <Route path="/productpage" element={<ProductPage/>}>

                </Route>
            </Routes>
        </BrowserRouter>
    )
}