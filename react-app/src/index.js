import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App/App.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import {addDefaultUsers} from './services/session/userService.js';
import {addDefaultProviders} from './services/session/providerService.js';

addDefaultUsers();
addDefaultProviders();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <App />
);