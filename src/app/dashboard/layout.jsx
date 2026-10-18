import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className=' mx-[30px] my-[20px] grid grid-cols-12 gap-5 min-h-screen'>
            <div className='col-span-3 border-r-2'>
                <h2 className='text-3xl'>Navigation</h2>
                <div className='flex flex-col gap-3 mt-6'> 
                    <Link href={"/dashboard/add-story"}>Add Story</Link>
                    <Link href={"/dashboard/my-profile"}>My Profile</Link>
                    <Link href={"/dashboard/settings"}>Settings</Link>
                </div>
            </div>
            <div className='col-span-9 border-2 border-fuchsia-700'> {children}</div>
        </div>
    );
};

export default DashboardLayout;
