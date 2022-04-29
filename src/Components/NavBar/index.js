import { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect'
import './style/navbar.css';
import './style/body.css';


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
                        <a href='https://tonesbucket.s3.amazonaws.com/Arellano+Anthony+Resume+(3).pdf' download target={'_blank'}>
                            6.Resume
                        </a>
                    </div>
                </div>
            </div>
            <div className='body-container'>
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
                    <text
                        style={{fontSize: "45px", marginTop: "10px"}}
                        className={next2 ? 'fade-in2' : 'hidden'}>
                        I am a software engineer who builds <br/>
                        full stack web applications.

                    </text>
                </div>
                <div ref={ref1} className='body-section'>
                    <div style={{fontSize: "45px"}}>
                        1. About me
                    </div>
                    <div style={{display: "flex", marginTop: "30px", fontSize: "20px"}}>
                        <div style={{marginRight: "15px"}}>
                            Software Engineer with a love for building full stack applications.

                            My current project Wanderer <br/> is an AirBnB inspired application where I am exploring the Google Maps API
                            in order to  <br/> provide easy location validation as well as display a visually compelling interface to the user. <br/> <br/>

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
                    <div style={{fontSize: "45px"}}>
                        2. Skills
                    </div>
                    <div className='technologies-container'>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/js.png')}/>
                            <text>Javascript</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/react.png')}/>
                            <text>React</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/redux.png')}/>
                            <text>Redux</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/html.png')}/>
                            <text>HTML5</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/css.png')}/>
                            <text>CSS3</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/express.png')}/>
                            <text>Express.js</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/flask.png')}/>
                            <text>Flask</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/postgres.png')}/>
                            <text>postgreSQL</text>
                        </div>
                        <div className='tech-card'>
                            <img className='tech-image' src={require('./style/images/py.png')}/>
                            <text>Python</text>
                        </div>
                    </div>
                </div>
                <div ref={ref3} className='body-section'>
                    <div style={{fontSize: "45px"}}>
                        3. Projects
                    </div>
                </div>
                <div ref={ref4} className='body-section'>
                    <div style={{fontSize: "45px"}}>
                        4. Music
                    </div>
                </div>
                <div ref={ref5} className='body-section'>
                    <div style={{fontSize: "45px"}}>
                        5. Contact Me
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NavBar;
