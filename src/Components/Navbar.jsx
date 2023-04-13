import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import navIcons from '../Assests/image 1.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

  return (
    <div className=" container1 container w-full h-[80px] flex justify-between items-center px-4 md:justify-around ">
    <div>
      <img style={{ width: "200px" }} src={navIcons} alt="" />
    </div>

    <div className="hidden md:flex gap-7 " >
      <Link to='/' className='font-Open Sans font-normal text-xl '>Home</Link>
      <Link to='/about' className='font-Open Sans font-normal text-xl' >About Us</Link>
      <Link to='/service' className='font-Open Sans font-normal text-xl'>Services</Link>
      <Link to='/career' className='font-Open Sans font-normal text-xl'>Careers</Link>
      <Link to='/contactUs' className='font-Open Sans font-normal text-xl'>Contact Us</Link>
    </div>
    <div onClick={handleClick} className="md:hidden z-10">
      {!nav ? <FaBars /> : <FaTimes />}
    </div>

    <div
        className={
          !nav
            ? "hidden"
            : "absolute top-14 left-0 w-full gap-3  flex flex-row justify-end items-right md:hidden "
        }
      >
        <Link to='/' className="font-normal text-md text-red-700 ">Home</Link>
        <Link to='/about' className="font-normal text-md text-red-700">About Us</Link>
        <Link to='/service' className="font-normal text-md text-red-700">Services</Link>
        <Link to='/career' className="font-normal text-md text-red-700">Careers</Link>
        <Link to='/contactUs' className="font-normal text-md text-red-700">Contact Us</Link>
      </div>
    </div>
  )
}

export default Navbar