import React from 'react'
import './card8.css'

const Card8 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "card8 dark" : "card8"}>
            <i className='bx bxl-instagram-alt this'></i>
            <h2 className={darkModeBtn ? 'card8-h2 dark' : 'card8-h2'}>FOLLOW <br /> ME</h2>
            <a href="https://instagram.com/vergara.8901?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card8