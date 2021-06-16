import React from 'react';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import Main from './main';
import Header from './header';
import Footer from './footer';

function App(props) {
    return (
        <BrowserRouter>
            <Header/>
            <Main/>  
            <Footer/>
        </BrowserRouter>
    )
}

export default App;