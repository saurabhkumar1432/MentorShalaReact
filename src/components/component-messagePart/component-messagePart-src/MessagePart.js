import data from '../../component-main-page/component-main-page-data/data.js'
import '../component-messagePart-css/MessagePart.css'
import {BsSearch,BsFillQuestionCircleFill,BsTools} from "react-icons/bs";
const MessagePart=()=>{
    return(
        <div className="col-4 messagePart">
            <div className="row messagePart-profile">
                <div className="col-sm-2 messagePart-profile-pic">
                    <a href='#'><img src={data.profilePic}></img></a>
                </div>
                <div className="col-sm-4 messagePart-profile-name"><a href='#'>{data.firstName}</a></div>
                <div className="col-sm-6 messagePart-profil-explore">
                    {/* <div class="d-flex">
                        <div class="mr-auto p-2 messagePart-profil-explore-icons"><BsSearch/></div>
                        <div class="p-2 messagePart-profil-explore-icons"><BsFillQuestionCircleFill/></div>
                        <div class="p-2 messagePart-profil-explore-icons"><BsTools/></div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
export default MessagePart