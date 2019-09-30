import React,{Component} from 'react';
import {Link,Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Background from '../Images/bg2.jpg';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';


const browserHistory = createBrowserHistory();

const sectionStyle = {
    width: "1100px",
    height: "500px",
    opacity: 0.7,
    backgroundImage: `url(${Background})`
};

const form ={
    width: "550px", /* Full width */
    height: "200",/* Full height */
    border: "3px solid black",
};


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.onChange = this.onChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    
    

    updateUsername(username) {
        this.setState({
            username: username.target.value
        });
    }

    updatePassword(password) {
        this.setState({
            password: password.target.value
        });
    }

    render() {
        const loginToSystem = (e) =>{
            e.preventDefault();
            console.log(this.state.password);
            if(this.state.username==='sitemanager'&&this.state.password==='sitemanager') {
                browserHistory.push('/SiteManagerHome');
            }else if(this.state.username==='supervisor' && this.state.password==='supervisor'){
                browserHistory.push('/supervisorHome');
            }else if(this.state.username==='suppiler' && this.state.password==='suppiler') {
                browserHistory.push('/SupplierHome');
            }else if(this.state.username==='employee' && this.state.password==='employee') {
                browserHistory.push('/AuthzEmployeeHome');
            };
        };
        return(

            <div style={{marginTop: 10}}>
                <br/>
                <section style={ sectionStyle }>
                    <div className="col-sm-20 offset-sm-1 align-content-md-center">

                        <form>
                            <div className="container">
                                <br/>
                                <form action="" className="was-validated ">
                                    <section style={ form }><br/>
                                        <div className="col-sm-9 offset-sm-2 ">
                                            <label htmlFor="uname" >E-mail : </label>
                                            <input type="text" className="form-control" id="username" placeholder="Enter username" name="username" onChange={(e) => this.updateUsername(e)}
                                                required/>
                                
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>
                                        <div className="col-sm-9 offset-sm-2">
                                            <label htmlFor="password">Password : </label>
                                            <input type="password" className="form-control" id="password" placeholder="Enter password" size="10" name="password" onChange={(e) => this.updatePassword(e)}
                                               required/>
                                           
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div><br/>
                                        <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" onClick={loginToSystem}>Login</button>
                                            <Link to={'/Home'}><button className="btn btn-outline-success col-sm-20 offset-sm-1 align-content-md-center" >Back</button></Link>
                                        </div>
                                        <br/>
                                    </section>
                                </form>
                            </div>

                        </form>
                        <br/>

                    </div>
                </section>
            </div>

        );
    }



}