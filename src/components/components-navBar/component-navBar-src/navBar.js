import React from "react";
import '../component-navBar-css/navBar.css'
import m4 from "../../../images/m4.jpg"
const NavBar=()=>{
    return(
        <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand nav-title" href="#"><img src={m4}></img><strong>Mentor Shala</strong></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse nav-tabs" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active nav-li">
              <a href="#">Home</a>
            </li>
            <li class="nav-item nav-li">
              <a href="#">Team</a>
            </li>
            <li class="nav-item nav-li">
              <a href="#">About</a>
            </li>
            <li class="nav-item nav-li">
              <a href="#">Contacts</a>
            </li>
            <li class="nav-item" id="list-loginBtn">
              <button id="loginBtn">Log In</button>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default NavBar