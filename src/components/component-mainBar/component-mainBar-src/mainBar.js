import React, { useState } from 'react'
import '../component-mainBar-css/mainBar.css'
import m4 from "../../../images/m4.jpg"
import {data} from '../component-mainBar-data/data.js'
import Experiment from './menu-render.js'
import { BsFillGearFill,BsCardList,BsChatRightDotsFill,BsFillPatchQuestionFill } from "react-icons/bs";
const MainBar=()=>{
    let [mode,Setmode]=useState(data[0])
    let isactiveArray=[]
    data.map((mode)=>{
        if(mode.id==0){
            isactiveArray.push(" active")
        }
        else{
            isactiveArray.push("")
        }
    })
    let [isactive,SetisActive]=useState(isactiveArray)
    const hanler=(id)=>{
        let  newIsActive=[];
        data.map((mode)=>{
            if(mode.id==id){
                newIsActive.push(" active")
            }
            else{
                newIsActive.push("")
            }
        })
        SetisActive(newIsActive)
        Setmode(data[id])
    }
   
    return(
        <React.Fragment>
            <div className="mainBar-bar">
                <a class="d-flex align-items-center" href="#">
                    <div class="p-1"><img src={m4}></img></div>
                    <div class="p-1"><h2>MentorShala</h2></div>
                </a>
            </div>
            <div className='menu-bar d-flex align-items-end justify-content-center'>
                {
                    data.map((mode)=>{
                        return(
                            <div className={"p-3 flex-item"+isactive[mode.id]}><button className='flex-item-button' onClick={()=>hanler(mode.id)}><h4>{mode.bsTag}</h4></button></div>
                        )
                    })
                }
            </div>
            <Experiment mode={mode}/>
        </React.Fragment>
    )
}
export default MainBar