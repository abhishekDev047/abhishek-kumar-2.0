"use client";

import React from 'react';
import Image from 'next/image';
import { GiFishBucket } from "react-icons/gi";
import Bucket from './Bucket';

function About() {
  const quote = `"There are more important things in life than winning or losing a game."`;
  const skills:string = " HTML, CSS, Javascript , React , Responsive design ";
  return (
    <div>

      <div className='text-center mt-40 mb-60'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>
          {quote}
        </h2>
        <p className="text-gray-500">
          Lionel Messi
        </p>
      </div>


      <div className='bg-[#6e07f3] h-auto px-10 py-20  '>

        <div className="container mx-auto py-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Hi, I'm Abhishek Kumar, a frontend web developer passionate about creating engaging and user-friendly web experiences. With a background in commerce and a love for coding, I embarked on my journey as a web developer in August 2022. Since then, I have been continuously learning and evolving my skills.
          </p>
          <p className="text-xl md:text-2xl text-white mb-6">
            I specialize in front-end development, with expertise in HTML, CSS, and JavaScript frameworks like React. I enjoy translating design concepts into responsive and interactive websites that deliver an exceptional user experience.
          </p>
          <p className="text-xl md:text-2xl text-white">
            Apart from coding, I am an avid learner, constantly exploring new technologies and trends in web development. I believe in clean and maintainable code practices and strive for continuous improvement in my work.
          </p>
        </div>

      </div>

      <div className='flex flex-col items-center justify-center  sm:flex-row px-3'>
        <div className='w-4/5 md:w-1/5 m-5'>
          <Image
            className="rounded-full"
            src={'/images/Pic.png'}
            height={400}
            width={400}
            alt='Abhishek Kumar' />
        </div>
        <div className='w-4/5 md:w-3/5 shadow-md m-5 text-xl md:text-2xl text-center flex flex-col items-center justify-center'>
          <p> Abhishek Kumar </p>
          <p> Frontend Web Developer </p>
          <p> I am 21 years old  </p>
          <p> Skills </p>
          <p> {skills} </p>
        </div>

      </div>

      <div className="flex flex-row items-center justify-center p-8 text-violet-600  text-center">
        <p className='text-2xl md:text-3xl lg:text-4xl'>
          What is in my Tech Bucket
        </p>
        <p className='ml-3 text-2xl md:text-3xl lg:text-5xl'>
          <GiFishBucket />
        </p>
      </div>

      <div className='shadow-md'>
        <Bucket />
      </div>



    </div>
  )
}

export default About;