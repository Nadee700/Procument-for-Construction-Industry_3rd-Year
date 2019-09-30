import React,{Component} from 'react';
import '../css/supplier.css';
import supplierHome from '../Images/supplierHome.jpg';
import supplierPic from '../Images/supplier.jpeg';
import {NavLink} from "react-router-dom";

const supplier ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class extends Component{
    render(){
        return(
            <div>

                <div className="sidenav" id="supplier">
                    <br/>
                    <section style={supplier}>
                        <img src={supplierPic} width="150px" height="160px"/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supplier</h6>
                    </section>
                    <br/><br/>
                    <NavLink to={'/SupplierHome'}>HOME</NavLink><br/>
                    <a href="#">SHOW REQUISIONS</a><br/>
                    <NavLink to={'/AddSupplier'}>ADD SUPPLIERS</NavLink><br/>
                
                    <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit"
                            onClick={this.handleClickDashboard}>LOG OUT </button>

                </div>
                <div className="main">
                    <h2> Home Page</h2>
                    <img src={supplierHome} width="1080px" height="500px"/>

                </div>
            </div>
        )
    }

};