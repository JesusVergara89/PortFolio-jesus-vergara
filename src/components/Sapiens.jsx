import React, { useState } from 'react'
import './sapiens.css'
import sapiensImg from './animalesadioses.jpg'
import Glimpse1 from './Glimpse1'

const Sapiens = ({darkModeBtn}) => {

  const [show, setShow] = useState(false)

  const showFunction = () => setShow(!show)

  return (
    <article className="sapiens">
      {show ?
      <Glimpse1 showFunction={showFunction} />
      :
       '' 
      }
      <button className={darkModeBtn ? 'sapiens-btn dark' : 'sapiens-btn'} onClick={showFunction}><i className={darkModeBtn ? 'bx bx-search-alt dark' : 'bx bx-search-alt'}></i></button>
      <img className="sapiens-img" src={sapiensImg} alt="imgcook" />
    </article>
  )
}

export default Sapiens