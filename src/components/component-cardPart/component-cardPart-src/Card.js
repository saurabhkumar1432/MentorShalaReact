import '../component-cardPart-css/Card.css'
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Carddata from '../component-cardPart-data/card-data'
const Card=(props)=>{
    // console.log(props.id);
    return(
        <div class="card">
            <img class="card-img-banner" src={Carddata[props.id].banner} alt="Card image cap"></img>
           <a href='#'><img className='card-img-profilpic' src={Carddata[props.id].profilePic} alt="profilPic"></img></a>
           <div id='name-div'>
                <h1>{Carddata[props.id].firstName} {Carddata[props.id].lastName}</h1>
            </div>
            <div id='div-city'>
                <h4><LocationOnIcon/> {Carddata[props.id].from} , {Carddata[props.id].country}</h4>
            </div>
            <div id='div-college'>
                <h4><SchoolIcon/> {Carddata[props.id].college}</h4>
            </div>
            <div id='div-pecialization'>
                <h4><LibraryBooksIcon/> {Carddata[props.id].specialization}</h4>
            </div>
            <div id='div-description'>
                <h5>{Carddata[props.id].description}</h5>
            </div>

        </div>
    )
}
export default Card