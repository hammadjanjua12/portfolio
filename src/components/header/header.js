import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    
      <div id="header">

      
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Hammad Akram</h1>
            <h5 className='text-light'>Front-end Developer</h5>
            <CTA/>
            <HeaderSocials/>

            <div className='me'>
                <img src={ME} alt=''/>

            </div>


            <a href='#contact' className='scroll__down'>scroll down</a>
            


        </div>
        </div>

    
  )
}

export default header