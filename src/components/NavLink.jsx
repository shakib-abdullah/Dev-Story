import Link from 'next/link';
import React from 'react';

const NavLink = ({href , classname , children}) => {
    return (
       <Link href={href}  >{children}</Link>
    );
};

export default NavLink;