import React,{ Component }  from 'react'
import Typist from 'react-typist'

import '../assets/sass/landingScreen.sass'
import AnimatedLogo from './AnimatedLogo'
import ExternalLinks from './ExternalLinks'
import downChevronImg from '../assets/imgs/down-chevron.svg'

const LandingScreen = () => (
  <div className='landingScreen'>
    <AnimatedLogo />
    <header>
      <span className='headerName'>Dominique Clemmer</span>
      <Typist>
        <span className='headerTitle'>Front-End Developer</span>
        <Typist.Backspace count={19} delay={750}/>
        <span className='headerTitle'>Futurist</span>
        <Typist.Backspace count={8} delay={750}/>
        <span className='headerTitle'>Yogi</span>
        <Typist.Backspace count={4} delay={750}/>
        <span className='headerTitle'>Empath</span>
        <Typist.Backspace count={6} delay={750}/>
        <span className='headerTitle'>Gym Rat</span>
        <Typist.Backspace count={7} delay={750}/>
        <span className='headerTitle'>Basketball Fiend</span>
        <Typist.Backspace count={16} delay={750}/>
        <span className='headerTitle'>Kobe Fan</span>
        <Typist.Backspace count={8} delay={750}/>
        <span className='headerTitle'>Traveler</span>
        <Typist.Backspace count={8} delay={750}/>
        <span className='headerTitle'>Human Being</span>
    </Typist>
    </header>
    <ExternalLinks />
    <img className='downChevronImg' src={downChevronImg } />
  </div>
)


export default LandingScreen
