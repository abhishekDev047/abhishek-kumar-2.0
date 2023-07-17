"use client";

import React from 'react';
import { SiTypescript, SiJavascript, SiReact, SiNextdotjs, SiBootstrap, SiTailwindcss, SiRedux, SiGit,SiGithub } from "react-icons/si";

function Tools(props:any) {
    return (
        <>
            <div id='icons' className='text-4xl flex flex-row px-10 my-2 flex-wrap w-full justify-center items-center '>
                <i className='text-yellow-500 items-center flex flex-row justify-center lg:w-1/6 p-2 sm:w-2/6 w-3/6 '><SiJavascript /></i>
                <i className='text-blue-600 items-center flex flex-row justify-center lg:w-1/6  p-2 sm:w-2/6 w-3/6'><SiTypescript /></i>
                <i className='text-blue-600 items-center flex flex-row justify-center lg:w-1/6 p-2  sm:w-2/6 w-3/6 '><SiReact /></i>
                <i className='text-gray-800 items-center flex flex-row justify-center lg:w-1/6  p-2 sm:w-2/6 w-3/6'><SiNextdotjs /></i>
                <i className='text-indigo-700 items-center flex flex-row justify-center lg:w-1/6  p-2 sm:w-2/6 w-3/6'><SiBootstrap /></i>
                <i className='text-blue-500 items-center flex flex-row justify-center lg:w-1/6  p-2 sm:w-2/6 w-3/6'><SiTailwindcss /></i>
                <i className='text-violet-700 items-center flex flex-row justify-center lg:w-1/6  p-2 sm:w-2/6 w-3/6'><SiRedux /></i>
                <i className='text-red-700 items-center flex flex-row justify-center lg:w-1/6  p-2 sm:w-2/6 w-3/6'><SiGit /></i>
                <i className='text-black items-center flex flex-row justify-center lg:w-1/6  p-2 sm:w-2/6 w-3/6'><SiGithub /></i>
            </div>

            <section className={props.classname}>
                <div className='text-4xl flex flex-row px-10 my-2 flex-wrap w-full justify-center items-center ' >
                            <i>
                                some other things 
                            </i>
                        </div>
            </section>
           

            </>
    )
}

export default Tools;