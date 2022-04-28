import { useEffect, useState } from 'react';
import './style/navbar.css';

const NavBar = () => {
    const [endEvent, setEndEvent] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setEndEvent(() => true)
        }, 2000)
    }, [])

    return (
        <div>
            <div className='navbar-container'>
                <div>
                    <div style={{marginLeft: "25px"}}>
                        <img
                            alt="logo"
                            style={{height: "85px", width: "85px"}}
                            src={endEvent ? require('./style/images/img.PNG') : require('./style/images/anim.gif')}/>
                    </div>
                </div>
                <div className="link-container">
                    <div className='link fade-in'>1.About //</div>
                    <div className='link fade-in2'>2.Experience //</div>
                    <div className='link fade-in3'>3.Projects // </div>
                    <div className='link fade-in4'>4.Music //</div>
                    <div className='link fade-in5'>5.Contact // </div>
                    <div className='link fade-in6'>6.Resume</div>
                </div>
            </div>
            <div className='body-container'>
                yes
            </div>

        </div>
    )
};

export default NavBar;
