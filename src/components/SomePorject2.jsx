import React from 'react'
import './someProjects2.css'
import ecommerce from './ecommerce.png'
import axios from './axiosLogo.png'
import routerDom from './reactRouterLogo.png'
import cssLogo from './cssLogo.svg'
import redux from './reduxLogo.svg'

const SomePorject2 = ({ darkModeBtn }) => {
    return (
        <article className={darkModeBtn ? "some2-main dark" : "some2-main"}>

            <h2 className={darkModeBtn ? 'some2-main-h2 dark' : 'some2-main-h2'}>Ecommerce:</h2>

            <div className="some2-main-img">
                <a href="https://e-commerce-v2.netlify.app" target="_blank" rel="noopener noreferrer">
                    <img className={darkModeBtn ? 'some2-main-img-img dark' : 'some2-main-img-img'} src={ecommerce} alt="" />
                </a>
            </div>

            <div className="some2-description">
                <img className='some2-description-img' src={redux} alt="" />
                <img className='some2-description-img' src={axios} alt="" />
                <img className='some2-description-img' src={routerDom} alt="" />
                <img className='some2-description-img' src={cssLogo} alt="" />
            </div>
        </article>
    )
}

export default SomePorject2