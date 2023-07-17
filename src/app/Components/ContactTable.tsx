"use client";

import React from 'react';
import Link from 'next/link';
import {SiGithub,SiLinkedin,SiInstagram,SiTwitter,SiGmail} from "react-icons/si";


function ContactTable(props:any) {
   
  return (
        <div className='flex flex-col items-center justify-center w-full'>
            <div className="quote-box text-center text-xl sm:text-2xl md:text-4xl"> {props.quote} </div>
            <div className='text-sm'> {props.legend} </div>

            <div className='flex flex-wrap flex-row justify-center items-center p-5 w-full h-full '>
      <Link className='m-3 hover:text-gray-700 mx-3 lg:text-4xl md:text-2xl text-xl' target='blank' href={'https://github.com/abhishekDev047'}>  <SiGithub/></Link>
      <Link className='m-3 hover:text-gray-700 mx-3 lg:text-4xl md:text-2xl text-xl' target='blank' href={'https://www.linkedin.com/in/abhishek-kumar-080086241/'}> <SiLinkedin/>  </Link>
      <Link className='m-3 hover:text-gray-700 mx-3 lg:text-4xl md:text-2xl text-xl' target='blank' href={'https://www.instagram.com/ab_hish_ek_1/'}> <SiInstagram/> </Link>
      <Link className='m-3 hover:text-gray-700 mx-3 lg:text-4xl md:text-2xl text-xl' target='blank' href={'https://twitter.com/abhishek_dev_47'}> <SiTwitter/> </Link>
      <Link className='m-3 hover:text-gray-700 mx-3 lg:text-4xl md:text-2xl text-xl' target='blank' href={'https://mail.google.com/mail/?view=cm&to=abhishekkumar.in47@gmail.com'}> <SiGmail/> </Link>
    </div>
        </div>
    
  )
}

export default ContactTable;