import React from "react";
import home2 from '../../images/home2.png'
const Slides=(props)=>{
    const {title,subTitle,img}=props.SlidesInfo
    return(
        <section id="banner">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" >
                        <p class="title">
                            <strong >{title}</strong>
                            <p class="text-center">{subTitle}</p> 
                            <div class="tagline"></div>
                        </p>
                    </div>
                    <div class="col-md-6 text-center">
                        <img src={img} class="image-mentor"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Slides