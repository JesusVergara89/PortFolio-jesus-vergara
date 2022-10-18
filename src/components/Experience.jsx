import React from 'react'
import Buttton1 from './Buttton1'
import './experience.css'
import ExperienceBackground from './ExperienceBackground'
import SomePorject2 from './SomePorject2'
import SomeProject1 from './SomeProject1'
import SomeProjects from './SomeProjects'
import SomeProjects3 from './SomeProjects3'

const Experience = ({ darkModeBtn }) => {
  return (
    <article className="experience">
      <div className="experience-grid-2">
        <SomeProjects darkModeBtn={darkModeBtn} />
        <SomeProject1 darkModeBtn={darkModeBtn} />
        <SomePorject2 darkModeBtn={darkModeBtn} />
        <SomeProjects3 darkModeBtn={darkModeBtn} />
      </div>
      <Buttton1 />
      <ExperienceBackground darkModeBtn={darkModeBtn} />
    </article>
  )
}

export default Experience