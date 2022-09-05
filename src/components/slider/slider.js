import React from "react";
import './slider.css'
import Slides from './slides.js'
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
                            <Slides/>
                            </div>
                            <div className="card">
                            <Slides/>
                            </div>
                            <div className="card">
                            <Slides/>
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