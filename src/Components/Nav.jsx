import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from'../Assets/Asset 16@4x.png'
import { GiHamburgerMenu } from "react-icons/gi";
import '../App.css'
const Nav = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const toggleMenu=()=>{
        setMenuOpen(!menuOpen);
    }
    function handleScroll() {
      const section = document.getElementById('menu');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  return (
    <nav className={`navbar ${menuOpen ? "open":""}`}>
        <div className='logo-container'>
        <Link  to={'/'}><img className='logo' src={logo} alt="logo" /></Link>
</div>
        <div className='menu-icon' onClick={toggleMenu}>
        <GiHamburgerMenu />
        </div>
        <ul className={`nav-links ${menuOpen ?"visible":""} `}>
            <li><Link className='nav-item' to={'/'}><button>Home</button> </Link></li>
           <li> <Link className='nav-item'><button>About</button> </Link></li>
            <li><Link className='nav-item'><button>Services</button></Link></li>
            <li><a className='nav-item' onClick={handleScroll}
      ><button>Menu</button></a></li>
           <li> <Link  className='nav-item' to={'/reservations'} ><button>Reservations</button></Link></li>
           <li> <Link className='nav-item'><button>Order Online</button></Link></li>
           <li> <Link className='nav-item'><button>Login</button></Link></li>

            </ul>
    </nav>
  )
}

export default Nav