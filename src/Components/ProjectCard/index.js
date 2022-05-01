import { Link } from 'react-router-dom';
import './style/projectcard.css';

const ProjectCard = ({img, url, title, description}) => {
    return (
        <a id="project-link" href={`${url}`} target="_blank">
            <div className='project-card'>
                <div className='image-container'>
                    <img className="project-image" src={img}/>
                </div>
                <div className='project-info-container'>
                    <div className='project-title'>
                        {title}
                    </div>
                    <div className='project-description'>
                        {description}
                    </div>
                </div>
            </div>
        </a>
    )
};

export default ProjectCard;
