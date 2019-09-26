import React,{Component} from 'react';
import jwt_decode  from 'jwt-decode';

// this component render the user profile after succesful logged in.
// and a link is in navigation bar to view profile whatever necessary.

class Profile extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            phnNo:'',
            password:'',
            email:''
        }
    }
// Gets the data stored in local storage after the user logged in.
// Then decode it and set the states

componentDidMount(){
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    this.setState({
        firstName:decoded.firstName,
        lastName:decoded.lastName,
        phnNo:decoded.phnNo,
        password:decoded.password,
        email:decoded.email

    })
}
render(){
    return(
        <div className="container">
            <div className="jumbotron mt-5">
            <div className="col-sm-8 mx-auto"> 
            <h3 className="text center" class="profile">PROFILE</h3>   
            </div>
            <table className="table col-md-6 mx-auto">  
                 <tbody> 
                         <tr>
                             <td>First Name</td>
                             <td>{this.state.first_name}</td>
                         </tr>  
                          <tr>                              
                            <td>Last Name</td>   
                            <td>{this.state.last_name}</td>                        
                         </tr>                      
                         <tr>                                
                             <td>Email</td>                                
                            <td>{this.state.email}</td>                          
                        </tr>                       
                        </tbody>                    
                </table> 
            </div>  
        </div>
    )

    }
}