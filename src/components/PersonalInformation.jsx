import React from 'react'
import './personalInformation.css'
import myphoto from './myphoto.png'

const PersonalInformation = ({ darkModeBtn }) => {
  return (
    <article className="persona-info">
      <h2 className={darkModeBtn ? 'persona-info-h2-up dark' : 'persona-info-h2-up'}>
       JESUS
      </h2>
      <img className='persona-info-myphoto' src={myphoto} alt="" />
      <h2 className={darkModeBtn ? 'persona-info-h2-down dark' : 'persona-info-h2-down'}>
       VERGARA 
      </h2>
    </article>
  )
}

export default PersonalInformation