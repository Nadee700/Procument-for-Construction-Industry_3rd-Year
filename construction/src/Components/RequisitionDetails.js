import React,{Component} from 'react';
import axios from 'axios';
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
    constructor(props){
        super(props);
            this.state={
                siteName:'',
                itemName:'',
                type:'',
                quantity:'',
                perAgreedPrice:'',
                perApprovedSupplier:'',
                AccountNo:''
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

        axios.post('http://localhost:3003/requisitions', {
            siteName:this.state.siteName,
            itemName:this.state.itemName,
            type:this.state.type,
            quantity:this.state.quantity,
            perAgreedPrice:this.state.perAgreedPrice,
            perApprovedSupplier:this.state.perApprovedSupplier,
            AccountNo: this.state.AccountNo,
            createdAt: Date.now()

      }).then((requisitions)=>{
        document.getElementById('sname').value = "";
        document.getElementById('iname').value = "";
        document.getElementById('type').value = "";
        document.getElementById('qty').value = "";
        document.getElementById('price').value = "";
        document.getElementById('supplier').value = "";
        document.getElementById('accNo').value = "";
        alert('Requisitions have been Created Successfully')
        console.log(requisitions)
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
                                <center><h2>REQUISITION DETAILS</h2></center>
                                
                                    <div className="form-row col-sm-20 offset-sm-1 align-content-md-center">
                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Site Name : </b></label>
                                        <input type="text" className="form-control" id="sname" placeholder="Enter SiteName" name="siteName" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                         <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Item Name:</b> </label><br></br>
                                        <input type="text" className="form-control" id="iname" placeholder="Enter item Name" name="itemName" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Type : </b></label><br></br>
                                        <input type="text" className="form-control" id="type" placeholder="Enter type" name="type" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>
                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Quantity : </b></label><br></br>
                                        <input type="number" className="form-control" id="qty" placeholder="Enter quantity" name="quantity" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Per Agreed Price : </b></label><br></br>
                                        <input type="number" className="form-control" id="price" placeholder="Enter quantity" name="perAgreedPrice" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className="col-md-4 mb-3 col-sm-20 offset-sm-1">
                                        <label htmlFor="details" ><b>Per Approved Supplier : </b></label><br></br>
                                        <input type="text" className="form-control" id="supplier" placeholder="Enter quantity" name="perApprovedSupplier" 
                                         onChange={event => this.onChange(event)}required/><br/>
                                        </div>

                                        <div className = "col-sm-9 offset-sm-1 align-content-md-center">
                                            <label htmalFor="details"><b>Funding Account No</b></label>
                                            <input type="number" className="form-control" id="accNo" placeholder="Enter AccountNo" name="AccountNo"
                                             onChange={event => this.onChange(event)} required/><br/>
                                        </div>
                                    </div>
                                
                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <br/>
                                        <button className="btn btn-primary offset-md-1" onClick={this.onSubmit}>MAKE REQUISITION</button>
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