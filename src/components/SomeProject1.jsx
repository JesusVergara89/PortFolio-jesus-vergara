import React from 'react'
import './someProjects1.css'
import pokemon from './pokemon.png'
import axios from './axiosLogo.png'
import routerDom from './reactRouterLogo.png'
import cssLogo from './cssLogo.svg'
import redux from './reduxLogo.svg'

const SomeProject1 = ({ darkModeBtn }) => {
    return (
        <article className={darkModeBtn ? "some1-main dark" : "some1-main"}>

            <h2 className={darkModeBtn ? 'some1-main-h2 dark' : 'some1-main-h2'}>Pokedex:</h2>

            <div className="some1-main-img">
                <a href="https://pokedex-app-new.netlify.app" target="_blank" rel="noopener noreferrer">
                    <img className={darkModeBtn ? 'some1-main-img-img dark' : 'some1-main-img-img'} src={pokemon} alt="" />
                </a>
            </div>

            <div className="some1-description">
                <img className='some1-description-img' src={redux} alt="" />
                <img className='some1-description-img' src={axios} alt="" />
                <img className='some1-description-img' src={routerDom} alt="" />
                <img className='some1-description-img' src={cssLogo} alt="" />
            </div>
        </article>
    )
}

export default SomeProject1