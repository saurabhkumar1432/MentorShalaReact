import React from "react";
const Slides=(props)=>{
    const {title,subTitle,img}=props.SlidesInfo
    return(
        <section id="banner">
            <div class="container">
                <div class="d-flex bd-highlight">
                    <div class="p-2 flex-fill bd-highlight" >
                        <p class="title">
                            <strong >{title}</strong>
                            <p class="text-center">{subTitle}</p> 
                            <div class="tagline"></div>
                        </p>
                    </div>
                    <div class="p-2 flex-fill bd-highlight">
                        <img src={img} class="image-mentor"></img>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Slides