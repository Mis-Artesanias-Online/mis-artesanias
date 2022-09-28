import React from 'react';
import ReactDOM from 'react-dom/client';

import {MisArtesanias} from './MisArtesanias';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {UserProvider} from "../context/userContext.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserProvider>
                <MisArtesanias/>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
)
