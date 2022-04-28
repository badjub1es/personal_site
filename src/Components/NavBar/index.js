import './style/navbar.css';

const NavBar = () => {
    return (
        <div>
            <div className='navbar-container'>
                <div>
                    <div style={{marginLeft: "25px"}}>
                        <img
                            alt="logo"
                            style={{height: "75px", width: "85px"}}
                            src={require('./style/images/favicon.PNG')}/>
                    </div>
                    {/* logo */}
                </div>
                <div className="link-container">
                    <div className='link fade-in'>About //</div>
                    <div className='link fade-in2'>Experience //</div>
                    <div className='link fade-in3'>Projects // </div>
                    <div className='link fade-in4'>Music //</div>
                    <div className='link fade-in5'>Contact // </div>
                    <div className='link fade-in6'>Resume</div>
                </div>
            </div>
            <div className='body-container'>
                yes
            </div>

        </div>
    )
};

export default NavBar;
