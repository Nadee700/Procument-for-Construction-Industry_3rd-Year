import React,{Component} from 'react';
import axios from 'axios';
import SupplierDetails from "../Images/bg2.jpg";
import {NavLink} from "react-router-dom";


const sectionStyle = {
    width: "1080px",
    height: "550px",
    opacity: 0.7,
    marginLeft: "204px",
    backgroundImage: `url(${SupplierDetails})`
};

const form ={
    width: "750px", /* Full width */
    height: "200",/* Full height */
    border: "3px solid black",
};


export default class extends Component{
    constructor(props){
        super(props);
            this.state={
                companyName:'',
                siteName:'',
                email:'',
                regNo:'',
                cNo:'',
                cPerson:''
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
        console.log(Date.now());
        e.preventDefault();

        axios.post('http://localhost:3003/suppliers', {
            companyName:this.state.companyName,
            siteName:this.state.siteName,
            email:this.state.email,
            regNo:this.state.regNo,
            cNo:this.state.cNo,
            cPerson:this.state.cPerson

      }).then((SupplierDetails)=>{
        document.getElementById('companyName').value = "";
        document.getElementById('siteName').value = "";
        document.getElementById('email').value = "";
        document.getElementById('regNo').value = "";
        document.getElementById('cNo').value = "";
        document.getElementById('cPerson').value = "";
    
        alert('Added Suppliers Successfully !!!')
        console.log(SupplierDetails)
      }).catch((err)=>{
        console.log(err)
      })
    }


    render() {
    return(
        <div>
            <section style={ sectionStyle }>
                <div className="col-sm-20 offset-sm-1 align-content-md-center">

                    <form>
                        <div className="container">
                            <br/>
                            <form action="" className="was-validated ">
                                <section style={ form }><br/>
                                <center><h2>ADD SUPPLIERS</h2></center>
                                
                                    <div className="form-row col-sm-20 offset-sm-1 align-content-md-center">
                                    <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Company Name:</b> </label><br></br>
                                        <input type="text" className="form-control" id="companyName" placeholder="Enter company Name" name="companyName" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>site Name : </b></label>
                                        <input type="text" className="form-control" id="siteName" placeholder="Enter SiteName" name="siteName" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                         <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Email :</b> </label><br></br>
                                        <input type="text" className="form-control" id="email" placeholder="Enter email" name="email" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Registration No : </b></label><br></br>
                                        <input type="number" className="form-control" id="regNo" placeholder="Enter type" name="regNo" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>
                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Contact No : </b></label><br></br>
                                        <input type="number" className="form-control" id="cNo" placeholder="Enter Contact No" name="cNo" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Contact Person : </b></label><br></br>
                                        <input type="text" className="form-control" id="cPerson" placeholder="" name="cPerson" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                    </div>
                                
                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <br/>
                                        <button className="btn btn-primary offset-md-1" onClick={this.onSubmit}>ADD SUPPLIERS</button>
                                        <button className="btn btn-secondary offset-md-1 " >Cancel</button>
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

    )
}

}