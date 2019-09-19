import React,{Component} from 'react';
import '../css/supervisor.css';
import supervisorHome from '../Images/supervisorHome.jpg';
import supervisor from '../Images/supervisor.jpg';

const supervisor1 ={
    paddingLeft: "40px",
    paddingRight:"40px"
};

export default class extends Component{
    render(){
        return(
            <div>

            <div className="sidenav" id="side">
                <br/>
                <section style={ supervisor1 }>
                <img src={supervisor} width="150px" height="160px"/>
                    <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Supervisor</h6>
                </section>
                <br/><br/><br/>
                <a href="#">HOME</a><br/>
                <a href="#">SHOW REQUISIONS</a><br/>
                <a href="#">NEW ALERTS</a><br/>
                <a href="#">APPROVED REQUISITIONS</a>
                </div>
            <div className="main">
            <h2> Home Page</h2>
                <img src={supervisorHome} width="1080px" height="500px"/>

            </div>
            </div>
        )
    }

};