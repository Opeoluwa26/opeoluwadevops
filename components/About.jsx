import React from 'react';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            Front-End <span className='text-[#5651e5]'> Shinobi </span>
          </p>
          <p className='py-2 text-gray-600'>
          I have spent the last 12 years working as a primary school teacher & a logistic buisness owner .
I have always had a desire to join the tech industry and due to the co-vid outbreak in 2020 I started my 
journey by learning HTML and CSS with these two technologies i was makeing various things like Product Designs, 3D-Animations
Landing Pages, Animations with CSS after months of practice I decided to make Programming my new career choice.
          </p>
          <p className='py-2 text-gray-600'>
          Intrigued with how programming can be I was quickly drawn to learn more . I started learning Javascript and was more
moved to making website interacive. After one year of learning and intensive practices I landed my first job as a freelancer 
on Upwork platform. I am now spending my time building projects with React JS, Firebase and learning new technologies.
          </p>
          <a href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </a>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <img
            className='rounded-xl'
            src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
};

export default About;