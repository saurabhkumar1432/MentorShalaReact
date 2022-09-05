import React from "react";
import home2 from '../../images/home2.png'
const Slides=()=>{
    return(
        <section id="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" >
                        <p class="title">
                            <strong >Mentorshala</strong>
                            <p class="text-center">A new way to learn</p> 
                            <div class="tagline"></div>
                        </p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src={home2} class="image-mentor"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Slides