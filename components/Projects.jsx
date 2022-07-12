import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BeatImg from '../public/assets/beat.png';
import LagosImg from '../public/assets/lagos.png'
import JetflixImg from '../public/assets/jetflix.png'
import SpaceImg from '../public/assets/space.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Beat By Dre'
            backgroundImg={BeatImg}
            projectUrl='/beat'
          />
          <ProjectItem
            title='Lagos Real Estate'
            backgroundImg={LagosImg}
            projectUrl='/lagos'
          />
        

        
          <ProjectItem
            title='Space Station'
            backgroundImg={SpaceImg}
            projectUrl='/space'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;