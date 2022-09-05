import React from "react";
import './slider.css'
import Slides from './slides.js'

import {SlidesInfo} from './slidesInfo.js'
const Slider=()=>{
    var count=1;
    setInterval(()=>{
        document.getElementById('radio'+count).checked=true;
        count++;
        if(count>3){
            count=1;
        }
    },2000)
    return(
        <div>
            <div id="div-in-main-div">
                    <div className="slider">
                        <div className="slides">
                            <input type="radio" name="radio-btn" id="radio1"></input>
                            <input type="radio" name="radio-btn" id="radio2"></input>
                            <input type="radio" name="radio-btn" id="radio3"></input>
                            <div className="card first">  
                            <Slides key={SlidesInfo[0].id} SlidesInfo={SlidesInfo[0]}/>
                            </div>
                            <div className="card">
                            <Slides key={SlidesInfo[1].id} SlidesInfo={SlidesInfo[1]}/>
                            </div>
                            <div className="card">
                            <Slides key={SlidesInfo[2].id} SlidesInfo={SlidesInfo[2]}/>
                            </div>
                            
                        </div>
                    </div>
            </div>
            <div className="navigation-auto">
                <div className="auto-btn1"></div>
                <div className="auto-btn2"></div>
                <div className="auto-btn3"></div>
            </div>{

            }
            <div class="navigation-manual">
                <label for="radio1" className="manual-btn"></label>
                <label for="radio2" className="manual-btn"></label>
                <label for="radio3" className="manual-btn"></label>
            </div>
        </div>
    )
    
}
export default Slider