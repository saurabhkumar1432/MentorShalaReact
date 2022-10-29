import '../component-cardPart-css/Card.css'
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Carddata from '../component-cardPart-data/card-data'
const Card=(props)=>{
    // console.log(props);
    const {id,firstName,lastName,profilePic,banner,from,country,college,specialization,description}=props.character
    return(
        <div class="card">
            <img class="card-img-banner" src={banner} alt="Card image cap"></img>
           <a href='#'><img className='card-img-profilpic' src={profilePic} alt="profilPic"></img></a>
           <div id='name-div'>
                <h1>{firstName} {lastName}</h1>
            </div>
            <div id='div-city'>
                <h4><LocationOnIcon/> {from} , {country}</h4>
            </div>
            <div id='div-college'>
                <h4><SchoolIcon/> {college}</h4>
            </div>
            <div id='div-pecialization'>
                <h4><LibraryBooksIcon/> {specialization}</h4>
            </div>
            <div id='div-description'>
                <h5>{description}</h5>
            </div>

        </div>
    )
}
export default Card