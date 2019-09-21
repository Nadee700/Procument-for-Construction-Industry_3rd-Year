import React,{Component} from 'react';
import AboutUs from "../Images/aboutUs.png";


const sectionStyle = {
    width: "1100px",
    height: "500px",
    opacity: 0.80,
    paddingRight:"303px",
    paddingLeft:"200px",
    marginLeft: "54px",
    backgroundImage: `url(${AboutUs})`
};

export default class extends Component{

    render() {
        return(
            <div className="container">
            <section style={sectionStyle}>

            </section></div>
        )

    }

}