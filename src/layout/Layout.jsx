import React from 'react';

import Header from '../modules/Header';
import Main from '../modules/Main';
import Footer from '../modules/Footer';

import '../styles/index.scss';
import '../styles/header.scss';
import '../styles/main.scss';
import '../styles/footer.scss';

const Layout = () => {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>
    )
}

export default Layout;