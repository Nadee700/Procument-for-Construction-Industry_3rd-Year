import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import createRequisition from './Components/createRequisition';
import Home from './Components/Home';
import Inventory from './Components/Inventory';
import supervisorHome from './Components/SupervisorHome';
import SiteManagerHome from './Components/SiteManagerHome';


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
            <Router>
                <br/>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light btn-group-lg bg-transparent">
                        <Link to={'/'} className="navbar-brand"><b><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i> CONSTRUCTION Industry</i></h3></b></Link>
                        <div className="collapse navbar-collapse" id="navbarSupportContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/Home'} className="nav-link">&nbsp;HOME</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/createRequisition'} className="nav-link">REQUISITION</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/Inventory'} className="nav-link">SERVICES</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/supervisorHome'} className="nav-link">CONTACTUS</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/SiteManagerHome'} className="nav-link">ABOUTUS</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

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
                    </Switch>
                        )};
            </Router>
        )
    }
}
export default App;


