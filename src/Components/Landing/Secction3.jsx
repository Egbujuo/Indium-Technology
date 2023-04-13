import React from 'react'
import "../../styles/Landing/Section3.css";
import phone from "../../Assests/Phone Icon.png";
import mail from "../../Assests/Envelope Icon.png";
import map from "../../Assests/Map Marker Icon.png";
import facebook from "../../Assests/White1.png";
import twitter from "../../Assests/White2.png";
import logo from "../../Assests/White3.png";
import instagram from "../../Assests/White.png";

const Secction3 = () => {
  return (
    <div className='section3 container1 relative'>

        <form action="" className='grid w-11/12 max-w-4xl m-auto text-left relative section3-form'>

            <p className='font-Open Sans font-bold text-lg mb-3 md:text-black lg:text-red-600 text-red-500'>Say Hi!</p>
            <p className='font-Open Sans font-normal text-base mb-3'>We’d like to talk with you.</p>

            <label htmlFor="" className='font-Open Sans font-bold text-sm '>My name is</label>
            <input className="mb-3 p-2 max-w-3xl section3-input" type="text" placeholder='Full name'/>

            <label htmlFor="" className='font-Open Sans font-bold text-sm'>My email is</label>
            <input className='mb-3 p-2 max-w-3xl section3-input' type="text" placeholder='Email'/>

            <label htmlFor="" className='font-Open Sans font-bold text-sm'>Your message</label>
            <textarea className='mb-4 p-8 max-w-3xl section3-input' type="text"placeholder='I want to say that...' />
            <div className='text-right  md:max-w-xs  mb-4'>
                <button className='bg-red-600 py-1 px-2  text-white rounded-3xl '>Send message</button>
            </div>
        </form>

        <div className='section3-background-container absolute top-0 left-10 right-0 bottom-0 '>
          <div className='section3-wrap'>
          <p className='text-white font-bold text-base font-Open-Sans'>Contact Information</p>
          <p className='max-w-sm  text-white text-xs font-normal mt-2 '>Fill up the form and our Team will get back to you within 24 hours.</p>

          <div className=''>
          <div className='flex mt-2'>
            <div className=''>
            <img src={phone} alt="" />
            </div>
            <p className='text-xs text-white '>(+40) 772 100 200</p>
          </div>

          <div className='flex mt-2 '>
            <div>
            <img src={mail} alt="" />
            </div>
            <p className='text-xs text-white'>hello@indium-technology.com</p>
          </div>

          <div className='flex mt-2'>
            <div>
            <img src={map} alt="" />
            </div>
            <p className='text-xs text-white'>Deák Ferenc utca 23.2.emelet, Budapest, 1052,HU</p>
          </div>

          <div className='flex gap-3 mt-3 text-left '>
            <div className=''>
            <img src={facebook} alt="" />
            </div>
            <div>
            <img src={twitter} alt="" />
            </div>
            <div>
            <img src={logo} alt="" />
            </div>
            <div>
            <img src={instagram} alt="" />
            </div>
          </div>
          </div>

          </div>

        </div>










    </div>
  )
}

export default Secction3