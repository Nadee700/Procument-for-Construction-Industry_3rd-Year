import React,{Component} from 'react';
import location from '../Images/location.jpg';

const background = {
    width: "1100px",
    height: "500px",
    opacity: 0.70,
    paddingRight:"303px",
    paddingLeft:"200px",
    backgroundImage: `url(${location})`
};

export default class extends Component {

        render(){
            return(

                <div className="container">
                    <section style={background}><br/>
                    <br/><br/>
                    <h3>OFFICIES</h3><br/>
                    <div>
                    <h6>Pleasant Hill<br/>
                        2285 Morello Avenue<br/>
                        Pleasant Hill, CA 94523<br/>
                        925.602.4710 main
                        925.602.4720 fax</h6>
                    </div><br/><br/><br/>
                    <div>
                        <h6>Pleasant Hill<br/>
                            2285 Morello Avenue<br/>
                            Pleasant Hill, CA 94523<br/>
                            925.602.4710 main
                            925.602.4720 fax</h6>
                    </div>
                    </section>
                </div>

            )
        }


};