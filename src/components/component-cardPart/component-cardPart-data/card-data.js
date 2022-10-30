import Lawliet from '../../../images/profilePic.jpg'
import kakashi from '../../../images/kakashi2.jpg'
import hachiman from '../../../images/hachiman.png'
import oregi from '../../../images/oregi1.jpg'
import ayanokoji from '../../../images/wp3666334-ayanokoji-wallpapers.jpg'
import itachi from '../../../images/wallpaperflare.com_wallpaper.jpg'
import gow1 from '../../../images/gow1.jpg'
import gow2 from '../../../images/gow2.jpg'
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
// shuffle(db)
let Carddata=[
    {
        id:0,
        firstName:"Lawliet",
        lastName:"laruso",
        profilePic: Lawliet,
        banner:gow1,
        from: "Delhi",
        country:"India",
        college:"IIIT Delhi",
        specialization:"Web Dev",
        description:"Best Detective in world. Also Known as L in death Note.Back Problems",
        
    },
    {
        id:1,
        firstName:"kakashi",
        lastName:"hatake",
        profilePic: kakashi,
        banner:gow2,
        from: "Mumbai",
        country:"India",
        college:"IIT Bombay",
        specialization:"Compeitive Programming",
        description:"6th Hokage and sensei of 7th hockage.",
        
    },
    {
        id:2,
        firstName:"Hachiman",
        lastName:"Hikigya",
        profilePic: hachiman,
        banner:gow1,
        from: "Chandighar",
        country:"India",
        college:"Lovely University",
        specialization:"Arts",
        description:"High schooler with good observation.",
        
        
    },
    {
        id:3,
        firstName:"Oreki",
        lastName:"san",
        profilePic: oregi,
        banner:gow2,
        from: "Sri City",
        country:"India",
        college:"IIIT Sri City",
        specialization:"App Dev",
        description:"High schooler, good in theories.",
        
    },
    {
        id:4,
        firstName:"Kiyotaka",
        lastName:"Ayanokoji",
        profilePic: ayanokoji,
        banner:gow1,
        from: "Chennai",
        country:"India",
        college:"Kalra University",
        specialization:"Web Dev",
        description:"Topper of White Room.",
        
    },
    {
        id:5,
        firstName:"Itachi",
        lastName:"Uchiha",
        profilePic: itachi,
        banner:gow2,
        from: "Jaipur",
        country:"India",
        college:"Babusa University",
        specialization:"English",
        description:"Akatsuki Member and best in Gengutsu.",
        
    },
    
]

shuffle(Carddata)

export default Carddata