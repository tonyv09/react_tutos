//Dependencis
import React from 'react';
import {react} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

//Routes
import AppRoutes from './routes'

//assets
import './index.css';

//import App from './components/App';
//import * as serviceWorker from './serviceWorker';

render(
<Router>
    <AppRoutes/>
</Router>, 
document.getElementById('root')
);
//serviceWorker.unregister();
 