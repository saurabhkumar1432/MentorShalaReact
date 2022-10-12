import React, { useState } from 'react'
import './mainBar.css'
import m4 from "../../images/m4.jpg"
import {data} from './data.js'
import Experiment from './experiment.js'
import { BsFillGearFill,BsCardList,BsChatRightDotsFill,BsFillPatchQuestionFill } from "react-icons/bs";
const MainBar=()=>{
    
    let [mode,Setmode]=useState(data[0])
    return(
        <React.Fragment>
            <div className="mainBar-bar">
                <a class="d-flex align-items-center" href="#">
                    <div class="p-1"><img src={m4}></img></div>
                    <div class="p-1"><h2>MentorShala</h2></div>
                </a>
            </div>
            <div className='menu-bar d-flex align-items-end justify-content-center'>
                {/* <button className='p-3 flex-item-button'><BsCardList/></button> */}
                {/* <button className='p-3 flex-item-button'><BsChatRightDotsFill/></button>
                <button className='p-3 flex-item-button'><BsFillPatchQuestionFill/></button>
                <button className='p-3 flex-item-button'><BsFillGearFill/></button> */}
                <div class="p-3 flex-item"><button className='flex-item-button' onClick={()=>Setmode(data[0])}><BsCardList/></button></div>
                <div class="p-3 flex-item"><button className='flex-item-button' onClick={()=>Setmode(data[1])}><BsChatRightDotsFill/></button></div>
                <div class="p-3 flex-item"><button className='flex-item-button' onClick={()=>Setmode(data[2])}><BsFillPatchQuestionFill/></button></div>
                <div class="p-3 flex-item"><button className='flex-item-button' onClick={()=>Setmode(data[3])}><BsFillGearFill/></button></div>
            </div>
            <Experiment mode={mode}/>
        </React.Fragment>
    )
}
export default MainBar