import React from "react";
import './slider.css'
import home2 from '../../images/home2.png'

const Slider=()=>{
    return(
       <div>
            <div id="div-in-main-div">
                    <div className="slider">
                        <div className="slides">
                            <input type="radio" name="radio-btn" id="radio1"></input>
                            <input type="radio" name="radio-btn" id="radio2"></input>
                            <input type="radio" name="radio-btn" id="radio3"></input>
                            <div className="card first">  
                            <section id="banner">
                                <div class="container">
                                <div class="row">
                                    <div class="col-md-6" >
                                    <p class="title">
                                        <strong >Mentorshala</strong>
                                        <p class="text-center">A new way to learn</p> 
                                        <div class="tagline"></div>
                                    </p>
                                    </div>
                                    <div class="col-md-6 text-center">
                                    <img src={home2} class="image-mentor"></img>
                                    </div>
                                </div>
                                </div>
                            </section>
                            </div>
                            <div className="card">
                            <section id="banner">
                                <div class="container">
                                <div class="row">
                                    <div class="col-md-6" >
                                    <p class="title">
                                        <strong >Mentorshala</strong>
                                        <p class="text-center">A new way to learn</p> 
                                        <div class="tagline"></div>
                                    </p>
                                    </div>
                                    <div class="col-md-6 text-center">
                                    <img src={home2} class="image-mentor"></img>
                                    </div>
                                </div>
                                </div>
                            </section>
                            </div>
                            <div className="card">
                                <section id="banner">
                                    <div class="container">
                                    <div class="row">
                                        <div class="col-md-6" >
                                        <p class="title">
                                            <strong >Mentorshala</strong>
                                            <p class="text-center">A new way to learn</p> 
                                            <div class="tagline"></div>
                                        </p>
                                        </div>
                                        <div class="col-md-6 text-center">
                                        <img src={home2} class="image-mentor"></img>
                                        </div>
                                    </div>
                                    </div>
                                </section>
                            </div>
                            
                        </div>
                    </div>

            </div>
            {/* <div className="navigation-auto">
                                <div className="auto-btn1"></div>
                                <div className="auto-btn2"></div>
                                <div className="auto-btn3"></div>
                            </div> */}
            <div class="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
            </div>
        </div>
    
    )
}
export default Slider