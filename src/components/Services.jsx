import React from "react";
import "../css/services.css"
import {BiCheck} from "react-icons/bi"

const Services = () =>{
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>

        <div className="container services_container">
        <article className="service">
                <div className="service_head">
                    <h3>UI/UX Design</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                </ul>
            </article>
            {/* End of UI/UX Design */}

            <article className="service">
                <div className="service_head">
                    <h3>Web Development</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                </ul>
            </article>
            {/* End of Web development */}

            <article className="service">
                <div className="service_head">
                    <h3>Content creatio</h3>
                </div>

                <ul className="service_list">
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                    <li>
                        <BiCheck className="service_list-icon"/>
                        <p>High level experience in web design and development knowledge, producing quality work.</p>
                    </li>
                </ul>
            </article>
            {/* End of Content creation */}

        </div>

        </section>
    )
}

export default Services