import React from "react";
import "../css/portfolio.css"
import porfolioImages1 from "../imgs/arpoador.jpg"
import porfolioImages2 from "../imgs/vidigalRio.jpg"


const data = [
    {
        id: 1,
        image: porfolioImages1,
        title: 'My title',
        github: 'https://github.com',
        demo: 'https://linkedin.com'
    },
    {
        id: 2,
        image: porfolioImages2,
        title: 'My title',
        github: 'https://github.com',
        demo: 'https://linkedin.com'
    },
    {
        id: 3,
        image: porfolioImages1,
        title: 'My title',
        github: 'https://github.com',
        demo: 'https://linkedin.com'
    },
    {
        id: 4,
        image: porfolioImages2,
        title: 'My title',
        github: 'https://github.com',
        demo: 'https://linkedin.com'
    },
    {
        id: 5,
        image: porfolioImages1,
        title: 'My title',
        github: 'https://github.com',
        demo: 'https://linkedin.com'
    },
    {
        id: 6,
        image: porfolioImages2,
        title: 'My title',
        github: 'https://github.com',
        demo: 'https://linkedin.com'
    }
]

const Portfolio = () => {
    return (
        <section>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img className="portfolio_images" src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>

        </section>
    )
}

export default Portfolio