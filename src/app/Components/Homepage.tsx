"use client";
import React,{useEffect} from 'react';
// import anime from 'animejs/lib/anime.es.js';
import Link from 'next/link';
import Image from 'next/image';
import { BsFillFileEarmarkCodeFill } from "react-icons/bs";
import Tools from './Tools';
import Button from 'react-bootstrap/Button';
import Projects from './Projects';
import TopMove from './TopMove';

function Homepage() {
const text1 = "Hello and welcome! It's a pleasure to meet you.";
const text2 = `
I'm Abhishek Kumar, a frontend web developer. Although my educational background is in commerce, my passion for computers and coding led me to pursue a full-time career in web development. Since August 2022, I have embarked on a journey to become a proficient web developer. I have already gained a wealth of knowledge and skills, but I am aware that there is still much more to learn. I am committed to continuous learning and personal growth, always striving to stay up-to-date with the latest developments in the field.`;
const text3 = `I love coding the frontend of websites, and I always approach every project with enthusiasm and passion.`;

const text4 = `Languages,Frameworks,Libraries & Tools I am proficient in:`;
const text5 = ``;

  useEffect(() => {

  }, []);
  
  return (
    <div className='flex flex-col items-center justify-center text-xl w-full'>
        <section id='homehead' className='flex relative h-[800px] w-full flex-col items-center justify-center '>
        <div className='text-black text-center w-full px-2 flex flex-col' id='intro'>
         <span className="text-2xl sm:text-4xl lg:text-5xl font-semibold my-4">Frontend Web Developer </span><span className='text-xl'> I love to code beautiful simple websites</span>
        </div>
        <div className='my-5'>
          <Image 
          className='rounded-full'
          src={"/images/Dev.jpg"}
          height={200}
          width={250}
          alt='Developer'
          />
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
        <section className='homebody w-full h-auto bg-[#6e07f3] text-white px-5 lg:px-32 py-40 md:py-60 flex flex-col text-center items-center justify-center shadow-xl'> 
        <div className=" text-3xl font-semibold">
        {text1}
        </div>
        <div className='text-2xl lg:px-32'>
       {text2}
        </div>
        </section>

        <section className='flex flex-col items-center px-8 relative bottom-20 bg-transparent w-full h-auto z-10 overflow-hidden  py-1'>
        <div className='flex flex-col items-center w-auto h-auto px-10 md:px-20 py-10 bg-gray-50 rounded-xl shadow-xl'>
              <div className='md:text-6xl text-2xl rounded-full bg-[#6e07f3] text-gray-100 p-3'>
                <BsFillFileEarmarkCodeFill/>
              </div>
              <div className='md:text-3xl text-lg text-center font-semibold my-2 underline'>
                Frontend Web Developer
              </div>
              <div className='text-center px-3'>
                {text3}
              </div>
              <div className='pt-5 text-center px-3 text-indigo-600 text-lg sm:text-xl font-semibold'>
                {text4}
              </div>
              <div className='w-full'>
                <Tools show={'hidden'}/>
              </div>
        </div>
        </section>

        <div className='border border-t-2 border-slate-600 w-full h-0'>
          {" "}
        </div>

        <section className='w-full h-auto my-10 flex flex-col items-center justify-center'>

          <div id='projects' className='text-3xl font-bold underline text-[#6e07f3] my-10'>
            My Projects
          </div>

          <div className=' mt-10 overflow-hidden w-full'>
              <Projects/>
          </div>
          <div className='items-center justify-center my-5'>
          <Button className='rounded-2xl  text-xl sm:text-2xl ' variant="outline-primary"><Link target='blank' href={"https://github.com/abhishekDev047?tab=repositories"}>Visit Github for more</Link></Button>
          </div>
        </section>

        <section className='w-full'>
          <TopMove link1={"#homehead"} top={"visible mx-2"} project={"visible mx-2"} prolink={'#projects'} />
        </section>

        <div className='border border-t-2 border-slate-600 w-full h-0 my-3'>
          {" "}
        </div>
          

    </div>
  )
}

export default Homepage;