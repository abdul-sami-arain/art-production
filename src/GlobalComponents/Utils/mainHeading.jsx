import React from "react";
import "./style.css"

export default function MainHeading({content1,content2,margin}) {
    return(
            <h3 style={{margin:margin}} className="mainHeading" >{content1} <span>{content2}</span></h3>
    )
}