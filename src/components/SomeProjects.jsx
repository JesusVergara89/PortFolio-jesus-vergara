import './someProjects.css'
import crud from './crud.png'
import axios from './axiosLogo.png'
import react from './reactLogo.png'
import reactform from './reactHook.png'
import cssLogo from './cssLogo.svg'

const SomeProjects = ({ darkModeBtn }) => {


    return (
        <article className={darkModeBtn ? "some-main dark" : "some-main"}>

            <h2 className={darkModeBtn ? 'some-main-h2 dark' : 'some-main-h2'}>Weather app:</h2>

            <div className="some-main-img">
                <a href="https://weather-app-update.netlify.app/" target="_blank" rel="noopener noreferrer">
                <img className={darkModeBtn ? 'some-main-img-img dark' : 'some-main-img-img'} src={crud} alt="" />
                </a>
            </div>

            <div className="some-description">
                <img className='some-description-img' src={axios} alt="" />
                <img className='some-description-img' src={react} alt="" />
                <img className='some-description-img' src={reactform} alt="" />
                <img className='some-description-img' src={cssLogo} alt="" />
            </div>
        </article>
    )
}

export default SomeProjects