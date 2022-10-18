import React from 'react'
import './someProjects3.css'
import rick from './rick.png'
import axios from './axiosLogo.png'
import routerDom from './reactRouterLogo.png'
import hookForm from './reactHook.png'
import react from './reactLogo.png'

const SomeProjects3 = ({ darkModeBtn }) => {
    return (
        <article className={darkModeBtn ? "some3-main dark" : "some3-main"}>

            <h2 className={darkModeBtn ? 'some3-main-h2 dark' : 'some3-main-h2'}>Rick And Morty worlds:</h2>

            <div className="some3-main-img">
                <a href="https://rick-and-morty-worlds.netlify.app" target="_blank" rel="noopener noreferrer">
                    <img className={darkModeBtn ? 'some3-main-img-img dark' : 'some3-main-img-img'} src={rick} alt="" />
                </a>
            </div>

            <div className="some3-description">
                <img className='some3-description-img' src={react} alt="" />
                <img className='some3-description-img' src={axios} alt="" />
                <img className='some3-description-img' src={routerDom} alt="" />
                <img className='some3-description-img' src={hookForm} alt="" />
            </div>
        </article>
    )
}

export default SomeProjects3