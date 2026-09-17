import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className='mr-6'>
                <Link className='mr-6' href='/login' >login</Link>
                <Link className='mr-6' href='/dashboard' >dashboard</Link>
                <Link className='mr-6' href='/register' >register</Link>
                <Link className='mr-6' href='/stories' >stories</Link>
                <Link className='mr-6' href='/Tutorials' >Tutorials</Link>
                <Link className='mr-6' href='/about' >about</Link>
                <Link className='mr-6' href='/about/contact' >contact</Link>
                <Link className='mr-6' href='/about/teams' >teams</Link>
                <Link className='mr-6' href='/list' > list</Link>
            </nav>
            
        </div>
    );
};

export default Header;

