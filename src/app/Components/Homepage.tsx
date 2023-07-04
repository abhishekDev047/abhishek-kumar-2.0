"use client";
import React,{useEffect} from 'react';
import anime from 'animejs/lib/anime.es.js';

function Homepage() {

  useEffect(() => {
    anime({
      targets: '#name',
      scale: [
        {value: .1, easing: 'easeOutSine', duration: 500},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
    });
  }, []);
  
  return (
    <div className='flex flex-col items-center justify-center'>
        <section id='homehead' className='flex relative  h-screen w-full flex-col items-center justify-center '>
        <div className='text-white text-center w-full text-5xl px-5' id='intro'>
          Hello sir ji my name is <i id='name'>Abhishek Kumar</i>  ji and i am a web developer
        </div>
        </section>
        <section id='homebody' className='flex flex-col p-10'>
          <p className="h-10 w-10 bg-green-900 my-1"></p>
          <p className="h-10 w-10 bg-green-900 my-1"></p>
          <p className="h-10 w-10 bg-green-900 my-1"></p>
        </section>
    </div>
  )
}

export default Homepage;