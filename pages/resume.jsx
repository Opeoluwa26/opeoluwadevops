import React from 'react';
import Head from 'next/head'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Opeoluwa | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Opeoluwa J. Adeleye</h2>
          <div className='flex'>
            <a
              href='http://linkedin.com/in/opeoluwa-adeleye-035452232'
              target='_blank'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a href='https://github.com/opeoluwa26' target='_blank'>
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <p>
          Web Development <span className='px-1'>|</span> Web Design{' '}
            <span className='px-1'>|</span> Complex Problem Solving
          </p>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>Mobile App Developer</span>
            <span className='px-2'>|</span> React Native
          </p>
        </div>

        {/* Experience */}
        <div className='py-4'>
          <h5 className='text-center underline text-[18px] py-4'>
            WORK EXPERIENCE
          </h5>
          <p className='italic'>
            <span className='font-bold'>Front-End Developer</span>
            <span className='px-2'>|</span>New York
          </p>
          <p className='py-1 italic'>CatchaFire May 2022 - Present</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             Help volunteering to companies in need of consultation in websites updates/development.
            </li>
            <li>
             Assiated in changing outlook of websites.
            </li>
            <li>
             Made new changes to existing websites by changing fonts and displays to websites.
            </li>
            
            <li>
              Assisted in implementing websites to be more mobile friendly.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold'>Pacific Professionals</span>
            <span className='px-2'>|</span>Lagos, Nigeria
          </p>
          <p className='py-1 italic'>Junior Front-End Developer (Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
             Implemented websites, landing pages from concept through development.
            </li>
            <li>
             Standardized all outputs with a new responsive, mobile first appraoch and stargegy.
            </li>
            <li>
             Assisted UX and UI designs for technological feasibility.
            </li>
            <li>
              Collaborated with a talented and high performing team members to
            implement new features.
            </li>
        
          </ul>
        </div>
        {/* Experience */}
        <div className='py-4'>
          <p className='italic'>
            <span className='font-bold italic'>
             UPWORK
            </span>
           
          </p>
          <p className='py-1 italic'>Freelance Work</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive understanding of HTML, CSS, and JavaScript
              to troubleshoot issues and concerns.
            </li>
            <li>
              Fixes small bugs, configure operation and analytic plugins, and
              design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
         
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;