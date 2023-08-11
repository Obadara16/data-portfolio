import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoGithub, IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="bg-black border border-white pt-12 pb-32">
      <div className='flex flex-col-reverse md:flex-row gap-12 md:gap-4 w-10/12 mx-auto'>
      <div className="flex gap-4 justify-center md:justify-start items-center w-full">
        <a href="facebook.com" className="text-white">
          <FaFacebookF className='w-6 h-6' />
        </a>
        <a href="instagram.com" className="text-white">
          <FiInstagram className='w-6 h-6' />
        </a>
        <a href="twitter.com" className="text-white">
          <IoLogoTwitter className='w-6 h-6' />
        </a>
        <a href="twitter.com" className="text-white">
          <IoLogoGithub className='w-6 h-6' />
        </a>
      </div>
        <div className='flex flex-col w-full text-center md:text-end'>
        <div className='flex flex-col w-full text-start md:text-start gap-4 md:gap-2'>
          <p>Designed and crafted and crafted with passion by <span className='text-[#E66EBB]'>Roqeeb Obadaa</span> </p>
          <p>Powered by <span className='text-[#E66EBB]'>React</span> and styled with love using <span className='text-[#E66EBB]'>Tailwind CSS,</span> </p>
          <p>Deployed flawlessly with <span className='text-[#E66EBB]'>Render's</span> cutting edge technology. </p>
          <p> Typography perfection achieved with the elegant <span className='text-[#E66EBB]'>Poppins</span> typeface.</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
