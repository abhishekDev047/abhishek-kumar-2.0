"use client";
import Link from 'next/link';
import React from 'react';
import {SiLinkedin,SiInstagram,SiTwitter,SiGmail} from "react-icons/si";
import {FcCellPhone} from "react-icons/fc";

function IconsSheet() {
  return (
    <>
    <div className="flex flex-wrap items-center justify-center w-full my-20">
      <div className="box bg-gray-50 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 m-2 shadow-sm rounded-xl hover:shadow-2xl ">
        <Link href={'https://www.linkedin.com/in/abhishek-kumar-080086241/'} target='blank' className=' text-blue-600 font-bold'>
          <SiLinkedin className="text-2xl md:text-3xl lg:text-4xl" />
        </Link>
      </div>
      <div className="box bg-gray-50 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 m-2 shadow-sm rounded-xl hover:shadow-2xl ">
        <Link href={'https://www.instagram.com/ab_hish_ek_1/'} target='blank' className=' text-red-600 font-bold'>
          <SiInstagram className="text-2xl md:text-3xl lg:text-4xl" />
        </Link>
      </div>
      <div className="box bg-gray-50 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 m-2 shadow-sm rounded-xl hover:shadow-2xl ">
        <Link href={'https://twitter.com/abhishek_dev_47'} target='blank' className=' text-blue-600 font-bold '>
          <SiTwitter className="text-2xl md:text-3xl lg:text-4xl" />
        </Link>
      </div>
      <div className="box bg-gray-50 w-full sm:w-1/2 md:w-1/4 lg:w-1/4 p-4 m-2 shadow-sm rounded-xl hover:shadow-2xl">
        <Link href={'https://mail.google.com/mail/?view=cm&to=abhishekkumar.in47@gmail.com'} target='blank' className=' text-red-600 font-bold '>
          <SiGmail className="text-2xl md:text-3xl lg:text-4xl" />
        </Link>
      </div>
    </div>

    <div className="bg-gray-100 text-center text-xl p-20">
<i className='text-4xl my-auto inline-block'> <FcCellPhone/> </i> mail first for contact number
    </div>

<div className="border border-slate-700 w-full my-20">
    {" "}
</div>
    </>
  )
}

export default IconsSheet;