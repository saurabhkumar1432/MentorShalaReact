import React, { useState } from 'react'
import './mainBar.css'
import m4 from "../../images/m4.jpg"
import {data} from './data.js'
import Experiment from './menu-render.js'
import { BsFillGearFill,BsCardList,BsChatRightDotsFill,BsFillPatchQuestionFill } from "react-icons/bs";
const MainBar=()=>{
    let [mode,Setmode]=useState(data[0])
    // let isactive=[true,false,false,false]
    let [isactive,SetisActive]=useState([" active","","",""])
    const hanler=(id)=>{
        if(id==0){
            SetisActive([" active","","",""])
        }
        else if(id==1){
            SetisActive([""," active","",""])
        }
        else if(id==2){
            SetisActive(["",""," active",""])
        }
        else{
            SetisActive(["","",""," active"])
        }
        Setmode(data[id])
    }
    // console.log(isactive[0]?'active':'');
    return(
        <React.Fragment>
            <div className="mainBar-bar">
                <a class="d-flex align-items-center" href="#">
                    <div class="p-1"><img src={m4}></img></div>
                    <div class="p-1"><h2>MentorShala</h2></div>
                </a>
            </div>
            <div className='menu-bar d-flex align-items-end justify-content-center'>
                <div className={"p-3 flex-item"+isactive[0]}><button className='flex-item-button' onClick={()=>hanler(0)}><h4><BsCardList/></h4></button></div>
                <div className={"p-3 flex-item"+isactive[1]}><button className='flex-item-button' onClick={()=>hanler(1)}><h4><BsChatRightDotsFill/></h4></button></div>
                <div className={"p-3 flex-item"+isactive[2]}><button className='flex-item-button' onClick={()=>hanler(2)}><h4><BsFillPatchQuestionFill/></h4></button></div>
                <div className={"p-3 flex-item"+isactive[3]}><button className='flex-item-button' onClick={()=>hanler(3)}><h4><BsFillGearFill/></h4></button></div>
            </div>
            <Experiment mode={mode}/>
        </React.Fragment>
    )
}
export default MainBar