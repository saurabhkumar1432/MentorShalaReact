// import { render } from "@testing-library/react"
import { Component } from "react";
import '../component-messagePart-css/renderer.css'
const X=(props)=>{
    // if(props.mode.id==0){
    //     return(
    //         <div>Message</div>
    //     )
    // }
    // else if(props.mode.id==1){
    //     return(
    //         <div>Matches</div>
    //     )
    // }
    let checkedArray=[true,false];
    if(props.mode.id==0){
        checkedArray[0]=true;
        checkedArray[1]=false;
    }
    else{
        checkedArray[0]=false;
        checkedArray[1]=true;
    }
    return(
        <div class="scroll">
            <input type="radio" className="radioBtn" name="radio-btn" id="radio1" checked={checkedArray[0]}></input>
            <input type="radio" className="radioBtn" name="radio-btn" id="radio2" checked={checkedArray[1]}></input>
            <div className="modeCards first">
                Message
            </div>
            <div className="modeCards">
                Matches
            </div>
        </div>
    )
}
export default X