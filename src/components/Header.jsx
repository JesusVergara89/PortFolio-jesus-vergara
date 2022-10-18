import { Link } from 'react-router-dom'
import LogoAndDarkMode from './LogoAndDarkMode'
import './header.css'


const Header = ({ setDarkModeBtn, darkModeBtn }) => {


    const darkModeFunction = () => setDarkModeBtn(!darkModeBtn)


    return (
        <header className="header">
            <nav className={darkModeBtn ? "header-nav dark" : "header-nav"}>
                <button className={darkModeBtn ? "header-nav-btn dark" : "header-nav-btn"}>
                    <Link className='link-header' to='/'>
                        <span>Home</span>
                    </Link>
                </button>
                <button className={darkModeBtn ? "header-nav-btn dark" : "header-nav-btn"}>
                    <Link className='link-header' to='aboutme'>
                        <span>About me</span>
                    </Link>
                </button>
                <button className={darkModeBtn ? "header-nav-btn dark" : "header-nav-btn"}>
                    <Link className='link-header' to='education'>
                        <span>Education</span>
                    </Link>
                </button>
                <button className={darkModeBtn ? "header-nav-btn dark" : "header-nav-btn"}>
                    <Link className='link-header' to='technologies'>
                        <span>Skills</span>
                    </Link>
                </button>
                <button className={darkModeBtn ? "header-nav-btn dark" : "header-nav-btn"}>
                    <Link className='link-header' to='experience'>
                        <span>Experience</span>
                    </Link>
                </button>
                <button className={darkModeBtn ? "header-nav-btn dark" : "header-nav-btn"}>
                    <Link className='link-header' to='contact'>
                        <span>Contact</span>
                    </Link>
                </button>
            </nav>
            <LogoAndDarkMode darkModeFunction={darkModeFunction} darkModeBtn={darkModeBtn} />
        </header>
    )
}

export default Header