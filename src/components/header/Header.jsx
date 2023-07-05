import React from 'react'
import "./header.scss"
import logo from "../../assets/images/logo.png"
const Header = () => {
  return (
    <header className='header'>
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
        <div className='header-action'>
            <button className='register-btn'>Đăng ký</button>
            <button className='login-btn'>Đăng nhập</button>
        </div>
    </header>
  )
}

export default Header