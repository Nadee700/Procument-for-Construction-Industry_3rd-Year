import React,{Component} from 'react';
import InventoryDetails from "../Images/bg2.jpg";

const sectionStyle = {
    width: "1080px",
    height: "550px",
    opacity: 0.7,
    marginLeft: "54px",
    backgroundImage: `url(${InventoryDetails})`
};

const form ={
    width: "750px", /* Full width */
    height: "200",/* Full height */
    border: "3px solid black",
};

export default class extends Component{
    render() {
    return(
        <div>
            <section style={ sectionStyle }>
                <div className="col-sm-20 offset-sm-1 align-content-md-center">

                    <form onSubmit={this.onSubmit}>
                        <div className="container">
                            <br/>
                            <form action="" className="was-validated ">
                                <section style={ form }><br/>
                                <center><h2>INVENTORY DETAILS</h2></center>
                                    <div className="col-sm-9 offset-sm-2 ">
                                        <label htmlFor="details" ><b>Site Name : </b></label>
                                        <input type="text" className="form-control" id="uname" placeholder="Enter SiteName" name="uname" required/><br/>
                                        <label htmlFor="details" >Item Name: </label><br></br>
                                        <label htmlFor="details" >Type : </label><br></br>
                                        <label htmlFor="details" >Quantity : </label><br></br>
                                    </div>

                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                                        <button className="btn btn-primary offset-md-1" >Purchase</button>
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