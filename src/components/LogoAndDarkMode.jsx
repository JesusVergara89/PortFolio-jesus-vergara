import React from 'react'
import './logoAndDark.css'

const LogoAndDarkMode = ({ darkModeFunction, darkModeBtn }) => {
    return (
        <article className='logo'>
            <div className='logo-logo'>
                <button className={darkModeBtn ? 'logo-logo-btn dark' : 'logo-logo-btn'}>
                    <a className={darkModeBtn ? 'logo-logo-a dark' : 'logo-logo-a'} href="https://drive.google.com/file/d/1mvimEkg1PAv2fa77XCDD_3rxnYzCvzqU/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
                </button>
                <i className={darkModeBtn ? 'bx bx-cloud-download dark' : 'bx bx-cloud-download'}><a href="https://drive.google.com/file/d/1mvimEkg1PAv2fa77XCDD_3rxnYzCvzqU/view?usp=sharing" target="_blank" rel="noopener noreferrer"></a></i>
            </div>
            <div className="dark-mode">
                <button onClick={darkModeFunction} className={darkModeBtn ? "dark-btn dark" : "dark-btn"}>{darkModeBtn ? <i className='bx bxs-sun' ></i> : <i className='bx bxs-moon'></i>}</button>
            </div>
        </article>
    )
}

export default LogoAndDarkMode