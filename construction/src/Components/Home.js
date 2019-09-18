import React,{Component} from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
        'mdbreact';
import  slide1 from "../Images/bg.jpg";
import  slide2 from '../Images/bg2.jpg';
import  slide3 from '../Images/construction.png';
import emergency from '../Images/emergency.jpg';
import design from '../Images/design.jpg';
import sustanability from '../Images/sustanability.jpg';

const btnSectionStyle = {
    paddingLeft:"1200px",

};
const background = {
    backgroundColor:"#ffe6ff",

};

const form ={
    backgroundColor : "#F3DFDB",
    width: "350px", /* Full width */
    height: "350px",/* Full height */
    border: "3px solid orange",
    backgroundImage: "center",
};

export default class extends Component{
    render() {
        return(
            <section style={ background }><br/>
            <div>
                <section style={ btnSectionStyle }>
                    <button className="btn btn-outline-danger col-sm-20 offset-sm-1 align-content-md-center" type="submit">LOG IN</button><br/>
                </section>
                <br/>
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img className="d-block w-100"
                                     src={slide1} alt="First slide" height="500px" width="1100px"/>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="d-block w-100"
                                     src={slide2} alt="Second slide" height="500px" width="1100px"/>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <img className="d-block w-100"
                                     src={slide3} alt="Third slide" height="500px" width="1100px"/>
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
            </div>
                <br/>
                <div className="container">

                    <div className="main_title">
                        <h3>EXCEEDING EXPECTATIONS. EVERY TIME.</h3><br/>
                        <p>We specialize in new construction, interior remodels, exterior remodels and building maintenance for retail, offices,
                            financial institutions, healthcare facilities, educational facilities, government properties, warehouses and shipping facilities.
                            Examples of work completed at these facilities include creating innovative offices, repairing airplane hangers, installing modular buildings,
                            creating public greenways and parks, upgrading interior and exterior for ADA compliance, and erecting metal building/canopies.
                            Our in-house work includes but is not limited to sidewalks, concrete pads and ramps, framing, drywall, acoustical ceilings,
                            wood trim work, doors, frames, locks, and pallet racking systems. For work not completed in-house, we have an extensive list of
                            qualified contractors. Here are services offered:</p>
                            <div className="container">
                                <p> * Pre-construction Design and Estimating</p>  <p> * Remodeling </p>
                                <p> * Construction Management</p>
                                <p> * Construction Services </p>
                                <p> *  Office Build-outs, Renovation and Expansion</p>

                            </div>


                    <div className="mainSub_title ">
                        <center> <h4><i>Quick Access for Our Services ...</i></h4></center><br></br><br></br>

                    </div>

                    <div className="latest_news_inner row">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <section style={ form }>
                            <div className="col-lg-3 col-md-6 offset-1">
                                <div className="l_news_item "><br/>
                                    <h3>Emergency Services</h3><br/>
                                    <button><img src={emergency} height="200px" width="200px"/></button>
                                </div>
                            </div>
                        </section>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <section style={ form }>
                            <div className="col-lg-3 col-md-6  offset-1">
                                <div className="l_news_item "><br/><br/>
                                    <h3>Design/Build</h3><br/>
                                    <img src={design} height="200px" width="200px"/>
                                </div>
                            </div>
                        </section>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <section style={ form }>
                            <div className="col-lg-3 col-md-6  offset-1">
                                <div className="l_news_item"><br/>
                                    <h3>Building Sustainability</h3><br/>
                                    <button ><img src={sustanability} height="200px" width="200px"/></button>
                                </div>
                            </div>
                        </section>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                    </div>
                </div>
                </div>

            </section>
        )
    }

}