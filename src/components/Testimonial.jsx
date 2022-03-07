import React from "react";
import "../css/testimonial.css";
import testimonialImages1 from "../imgs/arpoador.jpg";
import testimonialImages2 from "../imgs/vidigalRio.jpg";
import {Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


const data = [
    {
        avatar: testimonialImages1,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    },
    {
        avatar: testimonialImages2,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    },
    {
        avatar: testimonialImages1,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    },
    {
        avatar: testimonialImages2,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    },
    {
        avatar: testimonialImages1,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    },
    {
        avatar: testimonialImages2,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    },
    {
        avatar: testimonialImages1,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    },
    {
        avatar: testimonialImages2,
        name: 'Samuel Louis',
        review: "High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work. High level experience in web design and development knowledge, producing quality work."
    }
]

const Tesstimonial = () => {
    return (
        <section>
            <h5>Review From Clientes</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials_container"
                modules={[Pagination]}
                spaceBetween={40}
                slidePerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h5 className="client_name">{name}</h5>
                                <small className="client_review">{review}</small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>
    )
}

export default Tesstimonial