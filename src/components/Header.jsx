'use client'

import Dashboard from '@/app/dashboard/page';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {

    const pathname = usePathname();
    console.log(pathname);

    if(pathname.startsWith("/login")) return <> </>

    return (
        <div>
            <nav className=' space-x-5'>
                {/* <Link className='mr-6' href='/login' >login</Link>
                <Link className='mr-6' href='/dashboard' >dashboard</Link>
                <Link className='mr-6' href='/register' >register</Link>
                <Link className='mr-6' href='/stories' >stories</Link>
                <Link className='mr-6' href='/Tutorials' >Tutorials</Link>
                <Link className='mr-6' href='/about' >about</Link>
                <Link className='mr-6' href='/about/contact' >contact</Link>
                <Link className='mr-6' href='/about/teams' >teams</Link>
                <Link className='mr-6' href='/list' > list</Link> */}
                <NavLink className='mr-6' href='/login' >login</NavLink>
                <NavLink className='mr-6' href='/dashboard' >dashboard</NavLink>
                <NavLink className='mr-6' href='/register' >register</NavLink>
                <NavLink className='mr-6' href='/stories' >stories</NavLink>
                <NavLink className='mr-6' href='/Tutorials' >Tutorials</NavLink>
                <NavLink className='mr-6' href='/about' >about</NavLink>
                <NavLink className='mr-6' href='/about/contact' >contact</NavLink>
                <NavLink className='mr-6' href='/about/teams' >teams</NavLink>
                <NavLink className='mr-6' href='/list' > list</NavLink>
                
            </nav>
            
        </div>
    );
};

export default Header;

