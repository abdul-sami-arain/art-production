import React from "react";
import "./style.css";
import MainHeading from "../Utils/mainHeading";
import PrimeryButton from "../../ControlledComponents/PrimeryButton/PrimeryButton";

export default function ReadyToAsk() {
    return(
        <div className="readyToAsk">
            <MainHeading margin={"0"} content1={"Ready to work "} content2={"with us ?"} />
            <PrimeryButton 
                text={'Get Started Today'} 
                width={'200px'} 
                height={'55px'}
                fontSize={'18px'}
                lineHeight={'22px'}
                fontWeight={'400'}
                color={'#fff'}
            />
        </div>
    )
}
