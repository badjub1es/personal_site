import './style/navbar.css';

const NavBar = () => {

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
                    <div className='link fade-in'>1.About //</div>
                    <div className='link fade-in2'>2.Experience //</div>
                    <div className='link fade-in3'>3.Projects // </div>
                    <div className='link fade-in4'>4.Music //</div>
                    <div className='link fade-in5'>5.Contact // </div>
                    <div className='link fade-in6'>6.Resume</div>
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
            </div>

        </div>
    )
};

export default NavBar;
