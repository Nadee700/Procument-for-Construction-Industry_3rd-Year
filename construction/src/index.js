import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route,Link} from "react-router-dom";

import createRequisition from './Components/createRequisition';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import supervisorHome from './Components/SupervisorHome';
import SiteManagerHome from './Components/SiteManagerHome';
import Location from './Components/Location';
import AuthzEmployeeHome from "./Components/AuthzEmployeeHome";
import SupplierHome from "./Components/SupplierHome";
import RequisitionDetails from './Components/RequisitionDetails';
import Login from './Components/Login';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Register from "./Components/Register";
import CreatePurchaceOrder from './Components/CreatePurchaceOrder';
import PurchaseOrderDetails from './Components/purchaseOrderDetails';

import App from './App';
import *  as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,document.getElementById('root'));
serviceWorker.unregister();