import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../logo.svg';

const Header = () => {
    return (
        <div className="bg-slate-800">
            <div className="max-w-[1280px] mx-auto px-4 flex justify-between items-center ">
                <img className='w-[80px]' src={Logo} alt="" />
                <nav className="hidden flex-row space-x-6 md:flex">
                    <a className='text-white transition-all hover:underline hover:text-gray-400' href="/home">Home</a>
                    <a className='text-white transition-all hover:underline hover:text-gray-400' href="/course">Course</a>
                    <a className='text-white transition-all hover:underline hover:text-gray-400' href="/about">About</a>
                    <a className='text-white transition-all hover:underline hover:text-gray-400' href="/contact">Contact</a>
                </nav>
                <div className='md:hidden text-white text-2xl '>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
        </div>
    );
};

export default Header;