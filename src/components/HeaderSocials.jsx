import React from "react";
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"



const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" download className=""><BsLinkedin/></a>
            <a href="https://linkedin.com" download className=""><FaGithub/></a>
            <a href="https://linkedin.com" download className=""><FiDribbble/></a>
        </div>
    )
}

export default HeaderSocials