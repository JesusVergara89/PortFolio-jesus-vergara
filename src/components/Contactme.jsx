import React, { useState } from 'react'
import './contactme.css'
import ScreenDisplay from './ScreenDisplay'

const Contactme = ({ darkModeBtn }) => {

  const [social1, setSocial1] = useState(false)
  const [social2, setSocial2] = useState(false)
  const [social3, setSocial3] = useState(false)
  const [social4, setSocial4] = useState(false)
  const [social5, setSocial5] = useState(false)
  const [social6, setSocial6] = useState(false)
  const [social7, setSocial7] = useState(false)
  const [social8, setSocial8] = useState(false)
  const [social9, setSocial9] = useState(false)
  const [auxScreen1, setAuxScreen1] = useState(false)


  const social1function1 = () => {
    setSocial1(!social1)
    setSocial2(false)
    setSocial3(false)
    setSocial4(false)
    setSocial5(false)
    setSocial6(false)
    setSocial7(false)
    setSocial8(false)
    setSocial9(false)
    if (social1 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function2 = () => {
    setSocial1(false)
    setSocial2(!social2)
    setSocial3(false)
    setSocial4(false)
    setSocial5(false)
    setSocial6(false)
    setSocial7(false)
    setSocial8(false)
    setSocial9(false)
    if (social2 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function3 = () => {
    setSocial1(false)
    setSocial2(false)
    setSocial3(!social3)
    setSocial4(false)
    setSocial5(false)
    setSocial6(false)
    setSocial7(false)
    setSocial8(false)
    setSocial9(false)
    if (social3 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function4 = () => {
    setSocial1(false)
    setSocial2(false)
    setSocial3(false)
    setSocial4(!social4)
    setSocial5(false)
    setSocial6(false)
    setSocial7(false)
    setSocial8(false)
    setSocial9(false)
    if (social4 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function5 = () => {
    setSocial1(false)
    setSocial2(false)
    setSocial3(false)
    setSocial4(false)
    setSocial5(!social5)
    setSocial6(false)
    setSocial7(false)
    setSocial8(false)
    setSocial9(false)
    if (social5 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function6 = () => {
    setSocial1(false)
    setSocial2(false)
    setSocial3(false)
    setSocial4(false)
    setSocial5(false)
    setSocial6(!social6)
    setSocial7(false)
    setSocial8(false)
    setSocial9(false)
    if (social6 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function7 = () => {
    setSocial1(false)
    setSocial2(false)
    setSocial3(false)
    setSocial4(false)
    setSocial5(false)
    setSocial6(false)
    setSocial7(!social7)
    setSocial8(false)
    setSocial9(false)
    if (social7 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function8 = () => {
    setSocial1(false)
    setSocial2(false)
    setSocial3(false)
    setSocial4(false)
    setSocial5(false)
    setSocial6(false)
    setSocial7(false)
    setSocial8(!social8)
    setSocial9(false)
    if (social8 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }

  const social1function9 = () => {
    setSocial1(false)
    setSocial2(false)
    setSocial3(false)
    setSocial4(false)
    setSocial5(false)
    setSocial6(false)
    setSocial7(false)
    setSocial8(false)
    setSocial9(!social9)
    if (social9 === true) {
      setAuxScreen1(false)
    } else {
      setAuxScreen1(true)
    }
  }


  return (
    <article className="contact-main">
      <ScreenDisplay
        darkModeBtn={darkModeBtn}
        social1={social1}
        social2={social2}
        social3={social3}
        social4={social4}
        social5={social5}
        social6={social6}
        social7={social7}
        social8={social8}
        social9={social9}
        auxScreen1={auxScreen1}
      />
      <div className="contact-main-grid">

        <button onClick={social1function1} className={social1 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-linkedin-square' ></i>

        </button>

        <button onClick={social1function2} className={social2 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-whatsapp-square' ></i>

        </button>

        <button onClick={social1function3} className={social3 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-twitter' ></i>

        </button>

        <button onClick={social1function4} className={social4 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-telegram' ></i>

        </button>

        <button onClick={social1function5} className={social5 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-facebook-square' ></i>

        </button>

        <button onClick={social1function6} className={social6 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-gmail' ></i>

        </button>

        <button onClick={social1function7} className={social7 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-instagram-alt'></i>

        </button>

        <button onClick={social1function8} className={social8 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-github' ></i>

        </button>

        <button onClick={social1function9} className={social9 ? darkModeBtn ? "contact-main-btn1 turn dark" : "contact-main-btn1 turn" : darkModeBtn ? "contact-main-btn1 dark" : "contact-main-btn1"}>

          <i className='bx bxl-youtube' ></i>

        </button>
      </div>
    </article>
  )
}

export default Contactme