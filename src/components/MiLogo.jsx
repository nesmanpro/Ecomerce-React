import React from 'react';
import logo from '../assets/img/logo.svg'

const MiLogo = () => {
  return (
    <div className=' box-content h-12 w-12 pb-8 hover:scale-95'>
      <a href="#">
        <img src={logo} alt="" />
      </a>

    </div>
  )
}

export default MiLogo