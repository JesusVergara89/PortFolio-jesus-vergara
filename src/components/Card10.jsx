import React from 'react'
import './card10.css'

const Card10 = ({darkModeBtn}) => {
    return (
        <article className={darkModeBtn ? "card10 dark" : "card10"}>
            <i className='bx bxl-youtube this' ></i>
            <h2 className={darkModeBtn ? 'card10-h2 dark' : 'card10-h2'}>WATCH <br /> ME</h2>
            <a href="https://www.youtube.com/channel/UCe14TjbbRpZhPQsGdWFzlHg/featured" target="_blank" rel="noopener noreferrer">Go to</a>
        </article>
    )
}

export default Card10