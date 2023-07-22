"use client";

import React from 'react';
import Image from 'next/image';
import { GiFishBucket } from "react-icons/gi";
import Tools from '@/app/Components/Tools';
import Link from 'next/link';

function About() {
  const quote = `"There are more important things in life than winning or losing a game."`;
  const quote2 = `"Dreams are not what you see in your sleep; dreams are things which do not let you sleep."`;
  const whyIT = "Chasing Dreams: Why I Embraced the IT Industry";


  return (
    <div className='w-full'>

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
            {` Hi, I am Abhishek Kumar, a frontend web developer passionate about creating engaging and user-friendly web experiences. With a background in commerce and a love for coding, I embarked on my journey as a web developer in August 2022. Since then, I have been continuously learning and evolving my skills.`}
          </p>
          <p className="text-xl md:text-2xl text-white mb-6">
            {`   I specialize in front-end development, with expertise in HTML, CSS, and JavaScript frameworks like React. I enjoy translating design concepts into responsive and interactive websites that deliver an exceptional user experience.`}
          </p>
          <p className="text-xl md:text-2xl text-white">
            {` Apart from coding, I am an avid learner, constantly exploring new technologies and trends in web development. I believe in clean and maintainable code practices and strive for continuous improvement in my work.`}
          </p>
        </div>

      </div>

      <div className='flex flex-col items-center justify-center  sm:flex-row px-3 py-36'>
        <div className='w-4/5 md:w-1/5 m-5'>
          <Image
            className="rounded-full drop-shadow-2xl"
            src={'/images/Pic.png'}
            height={400}
            width={400}
            alt='Abhishek Kumar' />
        </div>
        <div className='w-4/5 md:w-3/5 shadow-md m-5 text-xl md:text-2xl text-center flex flex-col items-center justify-center'>
          <p> Abhishek Kumar </p>
          <p> Frontend Web Developer </p>
          <p> I am 21 years old  </p>
          <p> From Himachal Pradesh </p>
          <p> India </p>
        </div>

      </div>

      <div className="my-20 flex flex-row items-center justify-center p-8 text-violet-600  text-center">
        <p className='text-2xl md:text-3xl lg:text-4xl'>
          What is in my Tech Bucket
        </p>
        <p className='ml-3 text-2xl md:text-3xl lg:text-5xl'>
          <GiFishBucket />
        </p>
      </div>

      <div className='shadow-md pb-20 w-11/12 mx-auto'>
        <Tools show={'visible'} />
      </div>

      <div className='text-center  my-60'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl'>
          {quote2}
        </h2>
        <p className="text-gray-500">
          Cristiano Ronaldo
        </p>
      </div>

      <div className='bg-[#6e07f3] h-auto px-10 py-20 my-10 text-center '>

        <p className='text-2xl md:text-3xl lg:text-4xl my-10 font-semibold'>
          {whyIT}
        </p>

        <p className="text-xl md:text-2xl text-white">
          {`  So, I have completed my graduation in commerce. You may be wondering why I chose the IT sector instead of continuing in the commerce sector. Having completed my graduation in commerce, I faced some unique challenges, including a lack of proper guidance and financial resources. Despite these hurdles, I remained determined to pursue my passion for coding.`}
        </p>

        <p className="text-xl md:text-2xl text-white">
          {`  Moreover, after completing my school education, I had the opportunity to explore a career in the IT field, but financial constraints prevented me from taking that path. Despite these limitations, I managed to complete my graduation.`}
        </p>

        <p className="text-xl md:text-2xl text-white">
          {` Now, standing at a critical crossroad, I realized that success is not guaranteed in any field. With this understanding, I chose to embrace my love for coding and dedicate myself to continuous learning. I firmly believe that taking a chance on my passion is worthwhile, regardless of the outcome.I am enthusiastic about the future and excited to embark on a journey where I can apply my knowledge and skills to contribute to meaningful projects and grow as a developer.`}
        </p>

      </div>

      <div className='flex flex-col items-center justify-center my-20'>

        <div className="w-full sm:w-11/12 md:w-9/12 my-10 shadow-md text-xl md:text-2xl text-center py-10 px-3   " >
          <p className='text-2xl md:text-3xl lg:text-4xl my-8 font-semibold'>
            Educational Background
          </p>
          <p className='text-xl md:text-2xl'>
            {` I have graduated in Commerce. However, since August 2022, I have been wholeheartedly dedicating myself to learning and practicing Frontend Web Development, which has resulted in a substantial wealth of knowledge in this field. Moreover, I am constantly pushing myself to learn new things and stay updated with the latest technologies.`}
          </p>
          <p className='text-2xl md:text-3xl lg:text-4xl my-5 font-semibold'>
            Something in Frontend Web Development
          </p>
          <p className='w-full'>
            <Image
              src={"/images/certificate1.png"}
              alt='Free Code Camp'
              width={858}
              height={646}
              className='mx-auto'
            />
          </p>
          <p className=" text-xl md:text-2xl">
            Verify at <Link href={"https://freecodecamp.org/certification/Abhishek-Kumar-047/front-end-development-libraries"} className='text-blue-600' target='blank'> FreeCodeCamp.org</Link>
          </p>
        </div>

        <div className="w-full sm:w-11/12 md:w-9/12 my-10 shadow-md text-xl md:text-2xl text-center p-3 " >
          <p className='text-2xl md:text-3xl lg:text-4xl my-8 font-semibold'>
            A Glimpse Into My World
          </p>
          <p className='text-xl md:text-2xl'>
            {`
  In person, I am a shy and introverted individual. I also happen to be a stammerer, which brings about some speech difficulties. However, despite these traits, I proudly embrace my identity as a continuous learner. I firmly believe that change is a fundamental aspect of nature and the only constant in life. Embracing change allows personal growth and development, and I am open to welcoming positive changes into my life. `}
          </p>
          <p className='text-2xl md:text-3xl lg:text-4xl my-8 font-semibold'>
            Passions And Hobbies
          </p>
          <p className='text-xl md:text-2xl'>
            {`I have a variety of passions and hobbies that I deeply enjoy. Firstly, I absolutely love watching football, which brings me immense joy. Secondly, playing video games has always been a source of excitement and entertainment for me. However, my greatest passion lies in coding, I find myself completely immersed and fulfilled while working on coding projects.`} <br />

            {`Recently, I've developed a new hobby, reading books. I have started exploring works from different authors and delving into various topics, broadening my knowledge and perspectives.`} <br />

            {`Another activity that brings me immense satisfaction is traveling. Although I haven't had the opportunity to travel extensively yet, I hold a strong desire to explore beautiful places, especially in Europe and America. I am determined to pursue this dream whenever the opportunity arises.`}
          </p>
        </div>

        <div className="w-full sm:w-11/12 md:w-9/12 my-10 shadow-md text-xl md:text-2xl text-center " >
          <p className='text-2xl md:text-3xl lg:text-4xl my-8 font-semibold'>
            Experience
          </p>
          <p className='text-xl md:text-2xl'>
            {`While I haven't had any formal work experience, I've been actively working on personal projects. Through these`} <Link href={"/#projects"} className='text-blue-600'>projects</Link> {`, I've gained valuable knowledge and skills in working with APIs, frontend design, and development. I'm proud of what I've accomplished independently and look forward to taking on new challenges in the future!`}
          </p>
          <p className='text-xl md:text-2xl'>

          </p>
        </div>

      </div>



    </div>
  )
}

export default About;