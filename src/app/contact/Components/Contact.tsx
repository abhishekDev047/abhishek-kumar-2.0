"use client";
import React from 'react';
import IconsSheet from './IconsSheet';

function Contact() {
  const myquote:string = `"Your message matters. Reach out and let's connect."`;
  return (
    <>
<div className="quote bg-white text-center py-10 mb-10 mt-20 w-full">
        <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          {myquote}
        </h2>
        <p className="text-gray-500"> Abhishek Kumar</p>
      </div>

            <div className="flex flex-column items-center justify-center">
                <div className="text-center text-violet-600 text-2xl md:text-3xl lg:text-4xl mt-20">
 Social Links 
                </div>
                <div className='mb-20 w-full'>
<IconsSheet />
                </div>
            </div>
    </>
  )
}

export default Contact;