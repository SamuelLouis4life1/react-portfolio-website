import React from "react";
import "../css/header.css"
import CTA from "./CTA";
import logo_img from "../imgs/logo.jpg"
import HeaderSocials from "./HeaderSocials";


const Header = () => {
    return (
        <header>
            <h5>Hello I'm</h5>
            <h1>Samuel Louis knows as Sampeur</h1>
            <h5>Fullstack Developer</h5>
            <CTA/>
            <HeaderSocials/>


            <div className="me">
                <img src={logo_img} alt="" />
            </div>

            <a href="#contact" className="scroll_down">Scroll Down</a>


        </header>
    )
}

export default Header