import React from 'react'
import './mainBar.css'
import m4 from "../../images/m4.jpg"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faVcard } from '@fortawesome/free-solid-svg-icons'
import { BsFillGearFill,BsCardList,BsChatRightDotsFill,BsFillPatchQuestionFill } from "react-icons/bs";
const MainBar=()=>{
    return(
        <React.Fragment>
            
            <div className="mainBar-bar">
                <a class="d-flex align-items-center" href="#">
                    <div class="p-1"><img src={m4}></img></div>
                    <div class="p-1"><h3>MentorShala</h3></div>
                </a>
            </div>
            <div className='menu-bar d-flex align-items-end justify-content-center'>
                <div class="p-3 flex-item"><button className='flex-item-button'><BsCardList/></button></div>
                <div class="p-3 flex-item"><button className='flex-item-button'><BsChatRightDotsFill/></button></div>
                <div class="p-3 flex-item"><button className='flex-item-button'><BsFillPatchQuestionFill/></button></div>
                <div class="p-3 flex-item"><button className='flex-item-button'><BsFillGearFill/></button></div>
            </div>
        </React.Fragment>
    )
}
export default MainBar