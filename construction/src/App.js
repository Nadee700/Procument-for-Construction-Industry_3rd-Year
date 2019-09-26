import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import createRequisition from './Components/createRequisition';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import supervisorHome from './Components/SupervisorHome';
import SiteManagerHome from './Components/SiteManagerHome';
import Location from './Components/Location';
import AuthzEmployeeHome from "./Components/AuthzEmployeeHome";
import SupplierHome from "./Components/SupplierHome";
import InventoryDetails from './Components/InventoryDetails';
import Login from './Components/Login';
import Services from './Components/Services';
import AboutUs from './Components/AboutUs';
import Register from "./Components/Register";

const background = {
  //  background: "linear-gradient(to top right, #9999ff 0%, #ffcc99 104%)",
  //    background: "linear-gradient(to bottom right, #cccc00 0%, #ffffcc 100%)",
    background: "linear-gradient(to top right, #666699 0%, #ffcc00 100%)",
};

const backgroundNav = {
    background: "linear-gradient(to bottom, #ffffff 0%, #ffff99 100%)",
};


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            clickedRequisition: false,
            clickedInventory: false,
        };

        this.handleClickRequisition = this.handleClickRequisition.bind(this);
        this.handleClickInventory = this.handleClickInventory.bind(this);

    }

    handleClickRequisition() {
        this.setState({
            clickedRequisition: !this.state.clickedRequisition,
        });
    }

    handleClickInventory() {
        this.setState({
            clickedInventory: !this.state.clickedInventory,
        });
    }

    render() {
        return (
            <section style={ background }>
            <Router>
                <br/>
                    <section style={ background }>
                        <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light btn-group-lg bg-transparent">
                        <Link to={'/Home'} className="navbar-brand"><b><h3>&nbsp;&nbsp;&nbsp;&nbsp;<i>CONSTRUCTION Industry</i></h3></b></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/Home'} className="nav-link">&nbsp;HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/Services'} className="nav-link">SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/Location'} className="nav-link">LOCATIONS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/supervisorHome'} className="nav-link">CONTACTUS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/AboutUs'} className="nav-link">ABOUTUS</Link>
                                </li>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control rgba-mdb-color-light mr-sm-0" type="search" placeholder="Search" aria-label="Search"></input>
                                </form>
                                &nbsp;&nbsp;
                                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>

                            </ul>
                        </div>
                    </nav>

                </div>
                    </section>
                {this.state.clickedRequisition ? (
                    <div className="login_style">
                        <createRequisition handleClickInventory={this.handleClickInventory}/>
                    </div>
                ) : (

                    <Switch>
                        <Route exact path='/createRequisition' component={createRequisition}/>
                        <Route exact path='/Home' component={Home}/>
                        <Route exact path='/Inventory' component={Inventory}/>
                        <Route exact path='/supervisorHome' component={supervisorHome}/>
                        <Route exact path='/SiteManagerHome' component={SiteManagerHome}/>
                        <Route exact path='/Location' component={Location}/>
                        <Route exact path='/AuthzEmployeeHome' component={AuthzEmployeeHome}/>
                        <Route exact path='/SupplierHome' component={SupplierHome}/>
                        <Route exact path='/Login' component={Login}/>
                        <Route exact path='/InventoryDetails' component={InventoryDetails}/>
                        <Route exact path='/Services' component={Services}/>
                        <Route exact path='/AboutUs' component={AboutUs}/>
                        <Route exact path='/Register' component={Register}/>
                    </Switch>
                        )};
            </Router>
            </section>
        )
    }
}
export default App;


