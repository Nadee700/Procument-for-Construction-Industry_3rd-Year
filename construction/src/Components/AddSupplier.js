import React, {Component} from 'react';
import construction from "../Images/construction.png";
import '../css/supplier.css';
import {NavLink} from "react-router-dom";
import supplierPic from '../Images/supplier.jpeg';
import SupplierDetails from './SupplierDetails';

const sectionStyle = {
    width: "1080px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"190px",
    marginLeft: "50px",
    backgroundImage: `url(${construction})`
};
const supplier ={
    paddingLeft: "40px",
    paddingRight:"40px"
};
const form ={
    width: "603px", /* Full width */
    height: "600",/* Full height */
    position:"center",
    border: "5px solid brown",
};

export default class extends Component{
    constructor(props) {
        super(props);

        this.state = {
            clickedAddSupplier: false,
        }
        this.handleClickedAddSupplier = this.handleClickedAddSupplier.bind(this);
    }

    handleClickedAddSupplier() {
        this.setState({
            clickedAddSupplier: !this.state.clickedAddSupplier
        })
    }


    render(){
        return(
            <div><br/><br/>   
                <div className="sidenav" id="supplier">
                    <br/>
                    <section style={supplier}>
                        <img src={supplierPic} width="150px" height="160px"/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supplier</h6>
                    </section>
                    <br/><br/>
                    <NavLink to={'/SupplierHome'}>HOME</NavLink><br/>
                    <a href="#">SHOW REQUISIONS</a><br/>
                    <a href="#">NEW ALERTS</a><br/>

                    <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit"
                            onClick={this.handleClickDashboard}>LOG OUT </button>

                </div>

                    <div className="container">
                            {this.state.clickedAddSupplier? (
                                    <SupplierDetails/>
                                    ):(

                                <section style={ sectionStyle }>

                                    <div className="col-sm-20 offset-sm-1 align-content-md-center">
                                        <form onSubmit={this.onSubmit}>
                                <div className="container"><br/><br/>
                                <section style={form}><br/>

                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                ADD SUPPLIERS</b></h2></div>
                                        </label>
                                        <br/>

                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className="btn btn-success col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickedAddSupplier}>ADD</button>
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
