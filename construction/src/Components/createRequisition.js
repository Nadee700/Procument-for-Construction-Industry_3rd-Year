import React, {Component} from 'react';
import construction from "../Images/construction.png";

const sectionStyle = {
    width: "1100px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"200px",
    backgroundImage: `url(${construction})`
};

const form ={
    width: "550px", /* Full width */
    height: "250",/* Full height */
    position:"center",
    border: "5px solid brown",
};

export default class extends Component{

    render(){
        return(
            <div className="container">
                <section style={ sectionStyle }>

                    <div className="col-sm-20 offset-sm-1 align-content-md-center">
                        <form onSubmit={this.onSubmit}>
                            <div className="container">
                                <br/>
                            <form>
                                <section style={ form }><br/>

                                        <label className="form-check-label">
                                            <div className="font-weight-danger align-content-md-center">
                                            <h2><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                CREATE REQUISITION</b></h2></div>
                                        </label>
                                        <br/>

                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button className="btn btn-success col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickInventory}>SHOW INVENTORY</button>
                                    </div>
                                    <br/>
                                </section>
                            </form>
                            </div>

                        </form>
                    </div>

                </section>
            </div>

        )
    }
}
