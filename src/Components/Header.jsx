import React from 'react'
import { Link } from 'react-router-dom'
import banneri from '../Assets/banneri.jpg'
const Header = () => {
  return (
<header className='header'>
    <section>
    <div className="banner">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>We are a family owned Mediterraneran restuarent , focused on traiditional receipes served witha modern twist</p>
        <Link to='/booking'><button className='reserv-btn' aria-label='On Click'>Reserve Table</button></Link>
    </div>
    <div className='banner-image'>
        <img src={banneri} alt="" />
    </div>
    </section>
</header>  )
}

export default Header