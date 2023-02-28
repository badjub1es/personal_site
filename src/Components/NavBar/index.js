import { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect'
import './style/navbar.css';
import './style/body.css';
import ProjectCard from '../ProjectCard';
import HTML5SVG from './style/images/html5.svg'
import TypescriptSVG from './style/images/typescript.svg';
import ReactSVG from './style/images/reactjs.svg';
import ReduxSVG from './style/images/redux.svg';
import CSS3SVG from './style/images/css.svg';
import NodeJSSVG from './style/images/nodejs.svg';
import FlaskSVG from './style/images/flask.svg';
import PostGresSVG from './style/images/postfresql.svg';
import PythonSVG from './style/images/python.svg';
import DockerSVG from './style/images/docker.svg';
import MaterialSVG from './style/images/material-ui.svg';
import HerokuSVG from './style/images/heroku.svg';


const NavBar = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const [next, setNext] = useState(false);
    const [next2, setNext2] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setNext(() => true)
        }, 4500)
        setTimeout(() => {
            setNext2(() => true)
        }, 5000)
    }, [])

    return (
        <div>
            <div className='navbar-container'>
                <div>
                    <div style={{ marginLeft: "25px" }}>
                        <img
                            alt="logo"
                            style={{ height: "85px", width: "85px", cursor: "pointer" }}
                            onMouseEnter={(e) => e.target.src = require('./style/images/anim.gif')}
                            onMouseLeave={(e) => e.target.src = require('./style/images/img.PNG')}
                            onClick={() => window.location.reload(false)}
                            src={require('./style/images/img.PNG')} />
                    </div>
                </div>
                <div className="link-container">
                    <div
                        onClick={() => ref1.current.scrollIntoView()}
                        className='link fade-in'>1.About //</div>
                    <div
                        onClick={() => ref2.current.scrollIntoView()}
                        className='link fade-in2'>2.Skills //</div>
                    <div
                        onClick={() => ref3.current.scrollIntoView()}
                        className='link fade-in3'>3.Projects // </div>
                    <div
                        onClick={() => ref4.current.scrollIntoView()}
                        className='link fade-in4'>4.Music //</div>
                    <div
                        onClick={() => ref5.current.scrollIntoView()}
                        className='link fade-in5'>5.Contact // </div>
                    <div className='link fade-in6'>
                        <a href='https://tonesbucket.s3.amazonaws.com/Anthony+Arellano+Resume.pdf' download target={'_blank'}>
                            6.Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className='body-container'>
                <b></b>
                <b className='ball2'></b>
                <b className='ball3'></b>
                <b className='ball4'></b>
                <div className='sidebar'>
                    <img
                        alt="github"
                        className='image-link fade-in4'
                        onClick={() => window.open('https://github.com/badjub1es', '_blank')}
                        src={require('./style/images/github.png')} />
                    <img
                        alt="linkedin"
                        onClick={() => window.open('https://www.linkedin.com/in/antarellano', '_blank')}
                        className='image-link fade-in5'
                        src={require('./style/images/linkedin.png')} />
                    <img
                        alt="instagram"
                        onClick={() => window.open('https://www.instagram.com/lowpotassium', '_blank')}
                        style={{ marginBottom: "70px" }}
                        className='image-link fade-in6'
                        src={require('./style/images/instagram.png')} />
                </div>
                <div className='body-section'>
                    <div style={{fontSize: "45px"}}>
                        <Typewriter
                            changeDelay={"1s"}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("> Hi! My creator's name is")
                                    .stop()
                                    .start()
                            }}>

                        </Typewriter>
                    </div>
                    <div
                        style={{fontSize: "75px", color: "#FFFF02"}}
                        className={next ? 'fade-in' : 'hidden'}>
                         Anthony Arellano
                    </div>
                    <div
                        style={{fontSize: "45px", marginTop: "10px", textAlign: "center"}}
                        className={next2 ? 'fade-in2' : 'hidden'}>
                        I am a software engineer who builds <br/>
                        full stack web applications.

                    </div>
                </div>
                <div ref={ref1} className='body-section'>
                    <div style={{fontSize: "45px", color: "#FFFF02"}}>
                        1. About me
                    </div>
                    <div style={{display: "flex", marginTop: "30px", fontSize: "20px", justifyContent: "center"}}>
                        <div style={{marginRight: "15px", width: "50%"}}>
                            Software Engineer with a love for building full stack applications.

                            Currently I work at Peloton Interactive, providing robust content production tooling to internal employees. My main contribution
                            has been the design of a micro frontend React / Typescript web application, facilitated via Webpack Module Federation. My work
                            lives at the intersection of pristine functionality and stunning user interfaces. <br/> <br/>

                            In my free time I am the main song-writer, singer, and rhythm guitar player for my band Coco Blue. <br/>
                            We've recently released our first single "Wash" and are actively working towards recording our next <br/>
                            extended release in the coming months. <br/> <br/>

                            Being an artist first has allowed me to join both halves of my brain and produce projects that are <br/> not only
                            technologically sound, but also engage the user through visually stunning and intuitive <br/> user interfaces.
                            Always open to connect, chat, and discuss interests!
                        </div>
                        <div>
                            <img
                                onMouseEnter={(e) => e.target.src = require('./style/images/anthonypic.jpg')}
                                onMouseLeave={(e) => e.target.src = require('./style/images/anthonyblur.jpg')}
                                style={{
                                    width: "300px",
                                    height: "300px",
                                    objectFit: "cover"
                                }}
                                src={require('./style/images/anthonyblur.jpg')}/>
                        </div>
                    </div>
                </div>
                <div ref={ref2} className='body-section'>
                    <div style={{fontSize: "45px", color: "#FFFF02"}}>
                        2. Skills
                    </div>
                    <div className='technologies-container'>
                        <div className='tech-card'>
                            <img alt="js" className='tech-image' src={TypescriptSVG}/>
                            <div>Typescript</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="react" className='tech-image' src={ReactSVG}/>
                            <div>React</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="redux" className='tech-image' src={ReduxSVG}/>
                            <div>Redux</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="html5" className='tech-image' src={HTML5SVG}/>
                            <div>HTML5</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="css3" className='tech-image' src={CSS3SVG}/>
                            <div>CSS3</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="express" className='tech-image' src={NodeJSSVG}/>
                            <div>Node.js</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="flask" className='tech-image' src={FlaskSVG}/>
                            <div>Flask</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="psql" className='tech-image' src={PostGresSVG}/>
                            <div>postgreSQL</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="python" className='tech-image' src={PythonSVG}/>
                            <div>Python</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="docker" className='tech-image' src={DockerSVG}/>
                            <div>Docker</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="material-ui" className='tech-image' src={MaterialSVG}/>
                            <div>Material UI</div>
                        </div>
                        <div className='tech-card'>
                            <img alt="heroku" className='tech-image' src={HerokuSVG}/>
                            <div>Heroku</div>
                        </div>
                    </div>
                </div>
                <div ref={ref3} className='body-section'>
                    <div style={{fontSize: "45px", color: "#FFFF02"}}>
                        3. Projects
                    </div>
                    <div style={{display: "flex", gap: "25px"}}>
                        <ProjectCard
                            title={"Wanderer"}
                            img={"https://tonesbucket.s3.amazonaws.com/Capture.PNG"}
                            description={"An AirBnb inspired application built with React, Redux, Flask, Google Maps API, AWS S3, and postgreSQL."}
                            url={"https://wanderer-py.herokuapp.com"}
                            repo={"https://github.com/badjub1es/Wanderer"}/>
                        <ProjectCard
                            title={"Soundgarden"}
                            img={"https://tonesbucket.s3.amazonaws.com/Capture2.PNG"}
                            description={"Gathering inspiration from Spotify and Soundcloud, Soundgarden is a music playing application aimed at promoting aspiring local artists."}
                            url={"https://sound-garden.herokuapp.com"}
                            repo={"https://github.com/badjub1es/SoundGarden"}/>
                        {/* <ProjectCard
                            title={"QuickStarter"}
                            img={"https://tonesbucket.s3.amazonaws.com/Capture3.PNG"}
                            description={"A full-stack Kickstarter clone built with React, Redux, Flask, SQLAlchemy, and postgreSQL."}
                            url={"https://quickstarter-314.herokuapp.com"}
                            repo={"https://github.com/iedwards314/QuickStarter"}/> */}
                    </div>
                </div>
                <div ref={ref4} className='body-section'>
                    <div style={{fontSize: "45px", color: "#FFFF02"}}>
                        4. My Music
                    </div>
                    <div style={{display: "flex", marginTop: "30px", gap: "25px"}}>
                        <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/album/6EvvE9zAdYjeo2hvwpLDvi?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                        <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/6XnNzfqf8ei1a3YRQdZ9n6?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
                    </div>
                </div>
                <div ref={ref5} className='body-section'>
                    <div style={{fontSize: "45px", color: "#FFFF02", marginBottom: "30px"}}>
                        5. Contact
                    </div>
                    <div
                        style={{ cursor: "pointer", fontSize: "30px" }}
                        onClick={() => window.open('mailto:theanthonyarellano@gmail.com')}> {'>'} Email me</div>
                    <div
                        style={{ fontSize: "30px" }}
                        >{'> Call : 201-686-4015'}</div>
                </div>
            </div>
        </div>
    )
};

export default NavBar;
