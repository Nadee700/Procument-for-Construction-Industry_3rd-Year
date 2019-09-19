import React,{Component} from 'react';
import '../css/supplier.css';
import supplierHome from '../Images/supplierHome.jpg';
import supplierPic from '../Images/supplier.jpeg';

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
                    <a href="#">HOME</a><br/>
                    <a href="#">SHOW REQUISIONS</a><br/>
                    <a href="#">NEW ALERTS</a><br/>
                    <a href="#">APPROVED REQUISITIONS</a>
                </div>
                <div className="main">
                    <h2> Home Page</h2>
                    <img src={supplierHome} width="1080px" height="500px"/>

                </div>
            </div>
        )
    }

};