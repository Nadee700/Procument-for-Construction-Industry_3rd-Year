import React,{Component} from 'react';
import construction from "../Images/construction.png";
import siteManager from '../Images/siteManager.jpg';
import {NavLink} from "react-router-dom";
import'../css/siteManager.css';
import PurchaseOrderDetails from './purchaseOrderDetails';

const sectionStyle = {
    width: "1080px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"200px",
    marginLeft: "274px",
    backgroundImage: `url(${construction})`
};
const siteManager1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

const form ={
    width: "803px", /* Full width */
    height: "600",/* Full height */
    position:"center",
    border: "5px solid brown",
};


export default class extends Component{
    constructor(props){
        super(props);
        this.state ={
            clickedPurchaseOrder : false,
        }
        this.handleClickedPurchaseOrder = this.handleClickedPurchaseOrder.bind(this);
    }

    handleClickedPurchaseOrder(){
        this.setState({
            clickedPurchaseOrder:!this.state.clickedPurchaseOrder
        })
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
                    <NavLink to={'/CreatePurchaceOrder'}>APPROVED REQUISITIONS</NavLink><br/>
                    {/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
                    {/*<button><NavLink to={'/Home'}/>LOG OUT</button>*/}
                    <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG OUT </button>

                </div>

                {this.state.clickedPurchaseOrder? (
                     <PurchaseOrderDetails/>
                           ):(
                <section style={ sectionStyle }>
                    
               

                        <div className="col-sm-20 offset-sm-1 align-content-md-center">
                            <form onSubmit={this.onSubmit}>
                                <div className="container"><br/><br/>
                                <section style={form}><br/>
                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                CREATING PURCHACE ORDER</b></h2></div>
                                        </label>
                                        <br/>
                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className="btn btn-success col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickedPurchaseOrder}>CREATE PURCHASE ORDER</button>
                                    </div>
                                    <br/>
                                </section></div></form>
                            </div>
                                  
                                </section>)}
            </div>
        )
    }

}