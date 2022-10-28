import { useState } from 'react'
import '../component-cardPart-css/CardPart.css'
import Card from './Card'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Carddata from '../component-cardPart-data/card-data'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import data from '../../component-main-page/component-main-page-data/data'
import TinderCard from 'react-tinder-card'
import { ReactDOM } from 'react';
const CardPart=()=>{
    let dataActive=[]
    Carddata.map((person)=>{
        dataActive.push(person.active)
    })
    let [active,setActive]=useState(dataActive)
    const characters = Carddata
    const [lastDirection, setLastDirection] = useState()
    
    const swiped = (direction, nameToDelete) => {
        console.log(direction);
        if(direction=='right'){
            document.getElementsByClassName('cardPart')[0].classList.add('bgGreen')
        }
        else{
            document.getElementsByClassName('cardPart')[0].classList.add('bgRed')
        }
        console.log('removing: ' + nameToDelete)
        setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    console.log(active);
    document.getElementsByClassName('cardPart')[0].classList.remove('bgGreen')
    document.getElementsByClassName('cardPart')[0].classList.remove('bgRed')
    let array=[];
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
    console.log(array);
    active=array
    setActive(active)
    console.log(active);

  }
    return(
    <div className="cardPart col-6">
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
        {characters.map((character) =>
          <TinderCard className={active[character.id]? 'swipe':'remove-card'} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <Card id={character.id}/>
          </TinderCard>
        )}
            {/* {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />} */}
            {/* <div id='buttonsDiv'>
                <button id='acceptBtn' ><ThumbUpOffAltIcon/></button>
                <br></br>
                <button id='rejectBtn'><ThumbDownOffAltIcon/></button>
            </div> */}
    </div>
    )
}
export default CardPart