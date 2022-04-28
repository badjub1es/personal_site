import './style/navbar.css';

const NavBar = () => {
    return (
        <div>
            <div className='navbar-container'>
                <div>
                    <div style={{marginLeft: "25px"}}>
                        <img
                            style={{height: "75px", width: "85px"}}
                            src={require('./style/images/favicon.PNG')}/>
                    </div>
                    {/* logo */}
                </div>
                <div className="link-container">
                    <div className='link'>About</div>
                    <div className='link'>Experience</div>
                    <div className='link'>Projects</div>
                    <div className='link'>Music</div>
                    <div className='link'>Contact</div>
                    <div className='link'>Resume</div>
                </div>
            </div>
            <div className='body-container'>
                yes
            </div>

        </div>
    )
};

export default NavBar;
