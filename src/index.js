import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Layout from './layout/Layout';

ReactDOM.render(
    <HashRouter>
        <Layout/>
    </HashRouter>,
document.querySelector('#root'));