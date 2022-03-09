import React from "react";
import "../css/contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"


const Contact = () => {
    return (
        <section id="contact">
            <h5>Get in touch</h5>
            <h2>Contact me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineEmail/>
                        <h4>Email</h4>
                        <h5>sampeur4life1@gmail.com</h5>
                        <a href="mailto:sampeur4life1@gmail.com" target="_blank">Send a Message</a>
                    </article>

                    <article className="contact_option">
                        <RiMessengerLine/>
                        <h4>Messenger</h4>
                        <h5>Messenger Sampeur</h5>
                        <a href="mailto:sampeur4life1@gmail.com" target="_blank">Send a Message on Messenger</a>
                    </article>

                    <article className="contact_option">
                        <BsWhatsapp/>
                        <h4>Whatsapp</h4>
                        <h5>+5521987722151</h5>
                        <a href="mailto:sampeur4life1@gmail.com" target="_blank">Send a Message on Whatsapp</a>
                    </article>
                </div>
                {/* End Of Contact Options */}
                <form action="">
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" id="" cols="30" rows="7" placeholder="Your Message" required ></textarea>
                    <button type="submit" className="btn btn-primary">Send a Message</button>                
                </form>

            </div>

        </section>
    )
}

export default Contact