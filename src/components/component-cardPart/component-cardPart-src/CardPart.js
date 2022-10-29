// import { useState } from 'react'
import React, { useState, useMemo, useRef } from 'react'

import '../component-cardPart-css/CardPart.css'
import Card from './Card'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Carddata from '../component-cardPart-data/card-data'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import data from '../../component-main-page/component-main-page-data/data'
import TinderCard from 'react-tinder-card'
import UndoIcon from '@mui/icons-material/Undo';
import { ReactDOM } from 'react';
const db = Carddata

console.log(db);
let likedPeople=[]
let dislikedPeople=[]
const CardPart=()=>{
  // console.log(indexCurrently);
  console.log(likedPeople);
  console.log(dislikedPeople);
    const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)
  // console.log(db[currentIndex]);
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
    // console.log(db[currentIndex]);
    if(direction=='right'){
      document.getElementsByClassName('cardPart')[0].classList.add('bgGreen')
    }
    else{
        document.getElementsByClassName('cardPart')[0].classList.add('bgRed')
    }
    console.log(db[currentIndexRef.current+1]);
    if( direction=='right'){
      likedPeople.push(db[currentIndexRef.current+1])
    }
    else{
      dislikedPeople.push(db[currentIndexRef.current+1])
    }
    
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
    document.getElementsByClassName('cardPart')[0].classList.remove('bgGreen')
    document.getElementsByClassName('cardPart')[0].classList.remove('bgRed')
    // console.log(db[currentIndexRef.current+1]);
  }

  const swipe =  (dir) => {
    if (canSwipe && currentIndex < db.length) {
       childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
    if(dir=='right'){
      document.getElementsByClassName('cardPart')[0].classList.add('bgGreen')
    }
    else{
        document.getElementsByClassName('cardPart')[0].classList.add('bgRed')
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div className="cardPart col-6">
      <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
        <div className='card-container'>
        {db.map((character, index) => {
            return (
              <TinderCard
                  ref={childRefs[index]}
                  className='swipe'
                  key={character.name}
                  onSwipe={(dir) => swiped(dir, character.name, index)}
                  onCardLeftScreen={() => outOfFrame(character.name, index)}
              >
                {/* {
                  console.log(character)
                } */}
              <Card character={character}/>
              </TinderCard>
            )
        })}
        </div>
      <div className='card-buttons'>
        <button id='rejected' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('left')}><ThumbDownOffAltIcon/></button>
        <button style={{ backgroundColor: !canGoBack && '#c3c4d3' }} onClick={() => goBack()}><UndoIcon/></button>
        <button id='accepted' style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={() => swipe('right')}><ThumbUpOffAltIcon/></button>
      </div>
      {/* {lastDirection ? (
        <h2 key={lastDirection} className='infoText'>
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className='infoText'>
          Swipe a card or press a button to get Restore Card button visible!
        </h2>
      )} */}
    </div>
  )
}

export default CardPart