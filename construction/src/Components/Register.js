import React,{Component} from 'react';
import {Link} from "react-router-dom";
import Background from '../Images/bg2.jpg';
//import axios from 'axios';
import createBrowserHistory from 'history/createBrowserHistory';

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


export default class Register extends Component{
    constructor(props){
        super(props);

        this.state={
            firstName:'',
            lastName:'',
            phnNo:'',
            password:'',
            email:''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);    
    }

    onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
  
    onSubmit(e){
        e.preventDefault();

        const user = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            phnNo:this.state.phnNo,
            password : this.state.password,
            email:this.state.email
        }
    }

    //This functionn is create a user if his email does not exist in the db
 
    render() {
       
        return(

            <div style={{marginTop: 10}}>
                <br/>
                <section style={ sectionStyle }>
                <div className="col-sm-20 offset-sm-1 align-content-md-center">
                        <section style={ form }><br/>
                            <div className="form-row col-sm-20 offset-sm-1 align-content-md-center" >
                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                <label htmlFor="validationServer01">First Name : </label>
                                <input type="text" className="form-control is-valid" id="validationServer01" placeholder="Enter user name" 
                                    value={this.state.firstName} onChange={this.onChange} required/>
                                </div><br/>

                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 align-content-md-center">
                                <label htmlFor="validationServer01">Last Name :</label>
                                <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name"
                                    value={this.state.lastName} onChange={this.onChange} required/>
                                </div>

                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 align-content-md-center">
                                <label htmlFor="validationServer01">Contact Number :</label>
                                <input type="number/text" className="form-control is-valid" id="validationServer01" placeholder="Contact Number"
                                     value={this.state.phnNo} onChange={this.onChange} required/>
                                </div>
                            </div>

                            <div className="form-row">
                                 <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 " >
                                     <label htmlFor="validationServer03">Password :</label>
                                    <input type="password" className="form-control is-invalid" id="validationServer03" placeholder="Enter Password"
                                         Value={this.state.password} onChange={this.onChange} required/>
                                    <div className="invalid-feedback">
                                    Please provide a better password.
                                    </div>
                                 </div>
                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 ">
                                    <label htmlFor="validationServer04">email : </label>
                                     <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="Enter Confirm Password"
                                         value={this.state.email} onChange={this.onChange} required/>
                                <div className="invalid-feedback">
                                    Please provide a valid confirm password.
                                </div>
                                </div>

                            </div>
                    <div className="form-group">
                        <div className="form-check">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
                                <label className="form-check-label col-sm-20 offset-sm-0 align-content-md-center" htmlFor="invalidCheck3">
                                    Agree to terms and conditions
                                </label>
                                <div className="invalid-feedback col-sm-20 offset-sm-1 align-content-md-center">
                                    You must agree before submitting.
                                </div>
                        </div>
                    </div>
                     <button className="btn btn-primary col-sm-20 offset-sm-1 align-content-md-center" type="submit" onClick={this.handleClickedBackLogin}>REGISTER</button>
                        <Link to={'/Home'} ><button className="btn btn-primary col-sm-20 offset-sm-1 align-content-md-center" type="submit" >BACK</button></Link>
                        <br/><br/>
                            </section>
                        </div>
                </section>
            </div>

        );
    }



}