"use client";
import React,{useEffect} from 'react';
// import anime from 'animejs/lib/anime.es.js';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";

function Homepage() {
const text1 = "Hello and welcome! It's a pleasure to meet you.";
const text2 = `
I'm Abhishek Kumar, a frontend web developer. Although my educational background is in commerce, my passion for computers and coding led me to pursue a full-time career in web development. Since August 2022, I have embarked on a journey to become a proficient web developer. I have already gained a wealth of knowledge and skills, but I am aware that there is still much more to learn. I am committed to continuous learning and personal growth, always striving to stay up-to-date with the latest developments in the field.`
  useEffect(() => {

  }, []);
  
  return (
    <div className='flex flex-col items-center justify-center text-xl'>
        <section id='homehead' className='flex relative h-[600px] w-full flex-col sm:flex-row items-center justify-center '>
        <div className='text-black text-center w-full px-2 flex flex-col' id='intro'>
         <span className="text-2xl sm:text-4xl font-semibold">Frontend Web Developer </span><span> I love to code beautiful simple websites</span>
        </div>
        </section>
        <div className='px-10'>
          <Image
          src={'/images/Postermain.png'}
          height={1011}
          width={2493}
          alt='abhishek'
          />
        </div>
        <section className='homebody w-full h-auto bg-[#6e07f3] text-white px-5 lg:px-32 py-40 md:py-60 flex flex-col text-center items-center justify-center'> 
        <div className=" text-3xl font-semibold">
        {text1}
        </div>
        <div className='text-2xl lg:px-32'>
       {text2}
        </div>
        </section>

        <section className='flex flex-col items-center px-20 relative bottom-20 bg-transparent w-full h-96 z-10'>
        <div className='flex flex-col items-center w-auto h-auto px-2 md:px-20 py-10 bg-gray-50 rounded-xl'>
              <div className='md:text-6xl text-2xl rounded-full bg-orange-600 p-3'>
                <BsFillFileEarmarkCodeFill/>
              </div>
              <div className='md:text-3xl text-lg font-semibold my-2 underline'>
                Frontend Web Developer
              </div>
        </div>
        </section>
    </div>
  )
}

export default Homepage;