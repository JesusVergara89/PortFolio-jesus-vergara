import React from 'react'
import './rightBtn.css'

const RightButton = ({darkModeBtn, rightFucntion}) => {
  return (
    <article className={darkModeBtn ? "right-btn dark" : "right-btn"}>
        <button onClick={rightFucntion} className='right-btn-btn'>
        <i className='bx bx-chevrons-right'></i>
        </button>
    </article>
  )
}

export default RightButton