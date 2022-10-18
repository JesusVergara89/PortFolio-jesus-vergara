import React, { useState } from 'react'
import './nature.css'
import natureImg from './ideanature.jpg'
import Glimpse2 from './Glimpse2'

const Nature = ({darkModeBtn}) => {

  const [show, setShow] = useState(false)

  const showFunction = () => setShow(!show)

  return (
    <article className="nature">
      {show ?
        <Glimpse2 showFunction={showFunction} />
        :
        ''
      }
      <button className={darkModeBtn ? 'nature-btn dark' : 'nature-btn'} onClick={showFunction}><i className={darkModeBtn ? 'bx bx-search-alt dark' : 'bx bx-search-alt'}></i></button>
      <img className="nature-img" src={natureImg} alt="imgcook" />
    </article>
  )
}

export default Nature