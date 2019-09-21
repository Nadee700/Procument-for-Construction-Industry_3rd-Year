import React,{Component} from 'react';
import Background from '../Images/bg2.jpg';
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


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };
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
            // console.log(this.state.users);
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

                        <form onSubmit={this.onSubmit}>
                            <div className="container">
                                <br/>
                                <form action="" className="was-validated ">
                                    <section style={ form }><br/>
                                        <div className="col-sm-9 offset-sm-2 ">
                                            <label htmlFor="uname" >Username : </label>
                                            <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname"
                                                   onChange={username=> this.updateUsername(username)} required/>
                                            {/*<div className="valid-feedback">Valid.</div>*/}
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div>
                                        <div className="col-sm-9 offset-sm-2">
                                            <label htmlFor="pwd">Password : </label>
                                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" size="10" name="pswd"
                                                   onChange={password=> this.updatePassword(password)} required/>
                                            {/*<div className="valid-feedback">Valid.</div>*/}
                                            <div className="invalid-feedback">Please fill out this field.</div>
                                        </div><br/>
                                        <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" onClick={loginToSystem}>Login</button>
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