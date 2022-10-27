import { useState } from 'react'
import '../component-cardPart-css/CardPart.css'
import Card from './Card'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Carddata from '../component-cardPart-data/card-data'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import data from '../../component-main-page/component-main-page-data/data'
const CardPart=()=>{
    
    let dataActive=[]
    Carddata.map((person)=>{
        dataActive.push(person.active)
    })
    // console.log(dataActive);
    // let dataActive=[true,false]
    const [active,setActive]=useState(dataActive)
    // console.log(active);
    const swipeEffect=()=>{
        let ele=document.getElementsByClassName('cards')[0]
        ele.classList.add('SwipeleftEffect')
    }
    const handleClick=()=>{
        swipeEffect()
        let array=[];
        console.log(active);
        for(let i=0;i<active.length;i++){
            array.push(active[i]);
        }
        for(let i=0;i<array.length;i++){
            if(array[i]==true){
                array[i]=false;
                array[(i+1)%array.length]=true;
                break;
            }
        }
        setActive(array)
        console.log(active);
        
        // return array
    }

    return(
        <div className="cardPart col-6">
            {
                Carddata.map((person)=>{
                    console.log(person.id);
                    return(
                        <div className={active[person.id]? 'cards': 'remove-card'}>
                            <Card id={person.id}/>
                        </div>
                    )
                })
            }
            <div id='buttonsDiv'>
                <button id='acceptBtn' onClick={handleClick}><ThumbUpOffAltIcon/></button>
                <br></br>
                <button id='rejectBtn' onClick={handleClick}><ThumbDownOffAltIcon/></button>
            </div>
        </div>
    )
}
export default CardPart