import React,{Component} from 'react';
import '../css/authzEmployee.css';
import authzEmployee from '../Images/authzEmployee.jpg';
import auzEmployee from '../Images/auzEmployee.jpg';


const authzEmployee1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class extends Component{
    render(){
        return(
            <div>

                <div className="sidenav" id="auzEmp">
                    <br/>
                    <section style={ authzEmployee1 }>
                        <img src={auzEmployee} width="150px" height="160px"/><br/>
                        <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Employee</h6>
                    </section>
                    <br/><br/>
                    <a href="#">HOME</a><br/>
                    <a href="#">SHOW REQUISIONS</a><br/>
                    <a href="#">NEW ALERTS</a><br/>
                    <a href="#">APPROVED REQUISITIONS</a>
                </div>
                <div className="main">
                    <h2> Home Page</h2>
                    <img src={authzEmployee} width="1080px" height="500px"/>

                </div>
            </div>
        )
    }

};