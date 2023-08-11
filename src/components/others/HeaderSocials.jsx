import React from 'react'
import {GrLinkedin} from 'react-icons/gr'
import {FaGithub} from 'react-icons/fa'
import {DiHeroku} from 'react-icons/di'


const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/roqeeb-obadara-034915178/" target="_blank"  rel='noopener noreferrer'><GrLinkedin/></a>
        <a href="https://github.com/Obadara16"  target="_blank"  rel='noopener noreferrer'><FaGithub/></a>
        <a href="https://heroku.com"  target="_blank"  rel='noopener noreferrer'><DiHeroku/></a>
    </div>
  )
}

export default HeaderSocials