import React from "react";
import "../css/About.css"
import aboutImage from "../imgs/doisIrmao.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"



const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About me</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div >
                        <img src={aboutImage} alt="" className="about_me-image"/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>3+ years working</small>
                        </article>

                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Clientes</h5>
                            <small>10+ in Rio de janeiro</small>
                        </article>

                        <article className="about_card">
                            <VscFolderLibrary className="about_icon"/>
                            <h5>Projects</h5>
                            <small>10 completed projects</small>
                        </article>
                    </div>

                    <p> High level experience in web design and development knowledge, producing quality work.</p>
                    <a href="#contact" className="btn btn-primary">Let's Talk</a>

                </div>

            </div>
        </section>
    )
}

export default About