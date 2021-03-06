import React,{Component} from 'react';
import Inventory from "../Images/bg2.jpg";
import BootstrapTable from 'react-bootstrap-table-next';
import InventoryDetails from './InventoryDetails';

const sectionStyle = {
    width: "1100px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"200px",
    marginLeft: "54px",
    backgroundImage: `url(${Inventory})`
};
const form ={
    width: "700px", /* Full width */
    height: "300",/* Full height */
    position:"center",
    border: "5px solid brown",
};


export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickedInventoryDetails: false,
            products: [
                {
                    id: 1,
                    name: 'TV',

                },
                {
                    id: 2,
                    name: 'Mobile',

                },
                {
                    id: 3,
                    name: 'Book',

                },
            ],
            columns: [{
                dataField: 'id',
                text: 'ITEM DETAILS'
            },
                {
                    dataField: 'name',
                    text: 'QUANTITY'
                },]
        };



        this.handleClickInventoryDetails = this.handleClickInventoryDetails.bind(this);

    }

    handleClickInventoryDetails() {
        this.setState({
            clickedInventoryDetails: !this.state.clickedInventoryDetails,
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.clickedInventoryDetails ? (
                    <InventoryDetails/>
                ):(

                    <section style={ sectionStyle }><br/>
                    <section style={ form }><br/>
                <BootstrapTable
                    striped
                    hover
                    keyField = 'id'
                    data={this.state.products}
                    columns={this.state.columns}/>

                <div className="col-sm-20 offset-sm-1 align-content-md-center">
                    <form onSubmit={this.onSubmit}>
                        <div className="container"><br/>
                            <form>
                                    <div className="col-sm-9 offset-sm-2 ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button className="btn btn-danger col-sm-20 offset-sm-1 align-content-md-center" onClick={this.handleClickInventoryDetails}>MAKE REQUISITION</button>
                                    </div>
                                    <br/>
                            </form>
                        </div>
                    </form>
                </div>
                    </section>
            </section>
                    )}
        </div>
    )
}

}