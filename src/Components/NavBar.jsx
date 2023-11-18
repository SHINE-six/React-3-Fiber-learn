import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {


    return (
        <div className='h-fit w-full top-0 absolute z-50 bg-transparent overflow-visible'>
            <div className='w-full h-16 flex flex-row justify-between items-center font-worksans bg-fixed'>
                <div className='mx-4 text-3xl font-bold text-purple-600 hover:text-green-500 hover:font-black'>
                    <NavLink to="/">Desmond Foo</NavLink>
                </div>
                <div className='flex flex-row gap-3 w-fit mr-6 text-xl font-medium'>
                    <NavLink to="/" activeClassName="active" className={'hover:underline hover:text-blue-800 hover:font-bold'}>Home</NavLink>
                    <NavLink to="/about" activeClassName="active" className={'hover:underline hover:text-blue-800 hover:font-bold'}>About</NavLink>
                    <NavLink to="/project" activeClassName="active" className={'hover:underline hover:text-blue-800 hover:font-bold'}>Project</NavLink>
                    <NavLink to="/experience" activeClassName="active" className={'hover:underline hover:text-blue-800 hover:font-bold'}>Experience</NavLink>
                </div>
            </div>
        </div>
    )
}
export default NavBar;