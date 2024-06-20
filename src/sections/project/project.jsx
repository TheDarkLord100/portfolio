import React, { useEffect, useState } from 'react'
import './project.css'
import data from './project.json'
import ProjectCard from '../../components/card/card';

function Project() {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        setCardData(data);
    }, []);

    return (
        <section>
            <div className="section-heading">
                <span className='accent'>02.</span>Projects
            </div>
            <div className="section-content project-cards">
                {cardData.map((card, index) => (
                    <ProjectCard key={index} {...card} />
                ))}
            </div>
        </section>
    )
}

export default Project
