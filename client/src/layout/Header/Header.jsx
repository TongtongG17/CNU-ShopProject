import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './Sections/NavItem'
import Logo from '../../assets/color-logo.png'


function Header() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  }
  return (
    <section className='relative z-100 h-16'>
      <div className='w-full h-16 bg-white text-gray-500 border-b-2 border-blue-100'>
        <div className='flex items-center justify-between mx-5 sm:mx-10 lg:mx-40 '>
          {/* logo */}
          <div className='flex items-center w-20 h-16'>
            <Link to='/'><img src={Logo} alt='logo-img'></img></Link>
          </div>

          {/* menu */}
          <div className='text-2xl sm:hidden'>
            <button onClick={handleMenu}>{menu ? "-" : "+"}</button>
          </div>

          {/* item mobile screen */}
          <div className='hidden sm:block'>
            <NavItem />
          </div>
        </div>

        {/* item full screen */}
        <div className='block sm:hidden'>
          {menu && <NavItem mobile/>}
        </div>
      </div>

    </section>
  )
}

export default Header