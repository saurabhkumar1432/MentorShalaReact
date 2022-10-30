import CommunityCards from "./community-cards"
import '../component-community-css/community.css'
const Community=()=>{
    return(
        <div className="CommunityContainer">
            <div className="community-main-div">
                <CommunityCards/>
            </div>
        </div>
        // <CommunityCards/>
    )
}
export default Community