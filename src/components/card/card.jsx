import React from 'react';
import './card.css';
import { FaGithub, FaLink, FaGooglePlay } from 'react-icons/fa';

const ProjectCard = ({ title, date, description, technologies, github, link, playStore }) => {
    return (
        <div className="card">
            <div className="project-heading">
                <h3>{title}</h3>
                <div className="icons">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    )}
                    {link && (
                        <a href={link} target="_blank" rel="noopener noreferrer">
                            <FaLink />
                        </a>
                    )}
                    {playStore && (
                        <a href={playStore} target="_blank" rel="noopener noreferrer">
                            <FaGooglePlay />
                        </a>
                    )}
                </div>
            </div>
            <p className='accent project-date'>{date}</p>
            <div className="wrap-text">
            <p className='project-description'>{description}</p>
            <p className='accent tech'>{technologies.join('  ')}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
