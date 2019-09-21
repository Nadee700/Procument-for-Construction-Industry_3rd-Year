import React, {Component} from 'react';
import '../css/siteManager.css';
import construction from "../Images/construction.png";
import siteManager from "../Images/siteManager.jpg";
import {NavLink} from "react-router-dom";
import Inventory from "./Inventory";

const sectionStyle = {
    width: "1080px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"200px",
    marginLeft: "54px",
    backgroundImage: `url(${construction})`
};

const form ={
    width: "603px", /* Full width */
    height: "600",/* Full height */
    position:"center",
    border: "5px solid brown",
};

const siteManager1 ={
    paddingLeft: "40px",
    paddingRight:"40px",
    fontSize:"5px",
};


export default class extends Component{
    constructor(props) {
        super(props);

        this.state = {
            clickedInventory: false,
        };


        this.handleClickInventory = this.handleClickInventory.bind(this);

    }

    handleClickInventory() {
        this.setState({
            clickedInventory: !this.state.clickedInventory,
        });
    }

    render(){
        return(
            <div><br/><br/>
                <div className="sidenav">
                    <br/>
                    <section style={ siteManager1 }>
                        <img src={siteManager} width="150px" height="160px"/><br/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Site Manager</h6>
                    </section>
                    <br/><br/>
                    <NavLink to={'/SiteManagerHome'}>HOME</NavLink><br/>
                    <a href="#">VERIFY PURCHACE ORDER</a><br/>
                    <a href="#">MATCHING ITEMS</a><br/>
                    <a href="#">SEARCH PURCHASE ORDERS</a><br/>
                    <NavLink to={'/createRequisition'}>REQUISITIONS</NavLink>
                    </div>

                    <div className="container">
                            {this.state.clickedInventory ? (
                                    <Inventory/>
                                    ):(

                                <section style={ sectionStyle }>

                                    <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                        <form onSubmit={this.onSubmit}>
                                <div className="container"><br/><br/>
                                <section style={form}><br/>

                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                CREATE REQUISITION</b></h2></div>
                                        </label>
                                        <br/>

                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className="btn btn-success col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickInventory}>SHOW INVENTORY</button>
                                    </div>
                                    <br/>
                                </section></div></form>

                                    </div>
                                </section>)}
            </div>
            </div>

        )
    }
}
