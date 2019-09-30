import React,{Component} from 'react';
import Background from '../Images/bg2.jpg';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios'

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
            email:'',
            role:''
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

        axios.post('http://localhost:3003/register', {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            phnNo:this.state.phnNo,
            email:this.state.email,
            password:this.state.password,
            role: 'supervisor'
      }).then((user)=>{
        console.log(user);
      }).catch((err)=>{
        console.log(err)
      })
    
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
                                <label htmlFor="validationServer01">User Role: </label>
                                <select className="form-control selcls" id="enployee">
                                    <option>Site Manager</option>
                                    <option>Supervisor</option>
                                    <option>Supplier</option>
                                    <option>Employee</option>
                                </select>
                                </div>

                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                <label htmlFor="validationServer01">First Name : </label>
                                <input type="text" id="validationServer01" placeholder="Enter user name" name="firstName"
                                    //value={this.state.firstName}
                                    onChange={event => this.onChange(event)} required/>
                                </div>

                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 align-content-md-center">
                                <label htmlFor="validationServer01">Last Name :</label>
                                <input type="text" id="validationServer01" placeholder="First name" name="lastName"
                                  //value={this.state.lastName}
                                  onChange={event => this.onChange(event)} required/>
                                </div>

                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 align-content-md-center">
                                <label htmlFor="validationServer01">Contact Number :</label>
                                <input type="number"  id="validationServer01" placeholder="Contact Number" name="phnNo"
                                    // value={this.state.phnNo} 
                                    onChange={event => this.onChange(event)} required/>
                                </div>
                            </div>

                            <div className="form-row">
                                 <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 " >
                                     <label htmlFor="validationServer03">Password :</label>
                                    <input type="password" id="validationServer03" placeholder="Enter Password" name="password"
                                       //  Value={this.state.password}
                                       onChange={event => this.onChange(event)} required/>
                                 </div>
                                <div className="col-md-4 mb-3 col-sm-20 offset-sm-1 ">
                                    <label htmlFor="validationServer04">E-mail : </label>
                                     <input type="text" id="validationServer04" placeholder="Enter email" name="email"
                                        // value={this.state.email} 
                                        onChange={event => this.onChange(event)}required/>
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
                     <button className="btn btn-primary col-sm-20 offset-sm-1 align-content-md-center" type="submit" onClick={this.onSubmit}>REGISTER</button>
                        <button className="btn btn-primary col-sm-20 offset-sm-1 align-content-md-center" type="submit" >BACK</button>
                        <br/><br/>
                            </section>
                        </div>
                </section>
            </div>
        

        );
    }



}