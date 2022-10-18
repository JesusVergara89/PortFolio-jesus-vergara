import React from 'react'
import './card9.css'

const Card9 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "card9 dark" : "card9"}>
            <i className='bx bxl-github this' ></i>
            <h2 className={darkModeBtn ? 'card9-h2 dark' : 'card9-h2'}>WATCH <br /> OUT <br /> PROJECTS </h2>
            <a href="https://github.com/JesusVergara89" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card9