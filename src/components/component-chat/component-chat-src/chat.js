import '../component-chat-css/chat.css'
import Contact from '../../component-contact/Contact'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
// import hachiman from '../../../images/hachiman.png'
import Carddata from '../../component-cardPart/component-cardPart-data/card-data.js'
import { useState } from 'react'
import { Contrast } from '@mui/icons-material'
import MessageBox from '../../component-contact/messageBox'
const ChatSec=({})=>{
    const contactList=Carddata
    let [msgBox,SetMsgBox]=useState(0)
    let [msgObj,SetmsgObj]=useState(contactList[0])
    const handler=(props)=>{
        if(msgBox==0){
            SetmsgObj(props)
            SetMsgBox(1)
        }
        else
            SetMsgBox(0)
    }
    if(msgBox==0){

        return(
            
            contactList.map(
                contact => {
                    // console.log(contact.Name);
                    return <button id="contactContainer" class="d-flex" onClick={()=>{handler(contact)}}><Contact contact={contact}/></button>
                }
            ) 
        )
    }
    else{
        console.log(msgObj);
        function sendMessage(){
            console.log("something submitted");
        }
        return(
            <div id="chatContainer">
                <button class="goBack" onClick={()=>{
                    SetMsgBox(0);
                }}><BsFillArrowLeftCircleFill id="goBack"/></button>
                <div id="msgbox"><MessageBox class="d-flex mx-md-n8" msgObj={msgObj}/></div>
                <div id="input">
                    <input id="newMsgInput" type="text"/>
                    <button d="newMsgSubmit" onClick={()=>{
                        sendMessage()
                    }}>submit</button>
                </div>
                
            </div>
            
            
        )
    }
}

export default ChatSec
