import React,{Component} from 'react';
import '../css/siteManager.css';
import siteManagerHome from '../Images/siteManagerHome.jpg';
import siteManager from '../Images/siteManager.jpg';
import {NavLink} from "react-router-dom";

const siteManager1 ={
    paddingLeft: "40px",
    paddingRight:"40px",
    fontSize:"5px",
};

export default class extends Component{
    render(){
        return(
            <div>
                <div className="sidenav">
                    <br/>
                    <section style={ siteManager1 }>
                        <img src={siteManager} width="150px" height="160px"/><br/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Site Manager</h6>
                    </section>
                    <br/><br/>
                    <a href="#">HOME</a><br/>
                    <a href="#">VERIFY PURCHACE ORDER</a><br/>
                    <a href="#">MATCHING ITEMS</a><br/>
                    <a href="#">SEARCH PURCHASE ORDERS</a><br/>
                    <NavLink to={'/createRequisition'}>REQUISITIONS</NavLink>

                </div>
                <div className="main">
                    <h2> Home Page </h2>
                    <img src={siteManagerHome} width="1080px" height="500px"/>

                </div>
            </div>
        )
    }

};