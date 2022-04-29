import { useRef, useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect'
import './style/navbar.css';
import './style/body.css';


const NavBar = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
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
                        className='link fade-in2'>2.Experience //</div>
                    <div className='link fade-in3'>3.Projects // </div>
                    <div className='link fade-in4'>4.Music //</div>
                    <div className='link fade-in5'>5.Contact // </div>
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
                <div ref={ref1} className='body-section'>
                    <div style={{fontSize: "30px"}}>
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
                        style={{fontSize: "60px", color: "#FFFF02"}}
                        className={next ? 'fade-in' : 'hidden'}>
                         Anthony Arellano
                    </div>
                    <text
                        style={{fontSize: "30px", marginTop: "10px"}}
                        className={next2 ? 'fade-in2' : 'hidden'}>
                        I am a software engineer who builds <br/>
                        full stack web applications.

                    </text>
                </div>
                <div ref={ref2} className='body-section'>Experience</div>
            </div>
                        {/* <img
                            style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                                marginTop: "20px"
                            }}
                            src={require('./style/images/anthonypic.jpg')}/> */}

        </div>
    )
};

export default NavBar;
