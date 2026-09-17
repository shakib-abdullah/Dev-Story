'use client';


import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {

     const router = useRouter();

    const handlesharestory = () =>{
        // console.log("done");  

        console.log(router);
     
        const password = prompt("Enter your password");

        if(password == "1234"){
            // console.log(router);
            router.push('dashboard');
        }
        
    }


    return (
        <div className='flex flex-col h-[200px] mt-1 w-full items-center justify-center bg-amber-200 text-center text-5xl text-black bg-gradient-to-r from-cyan-100 to-cyan-700'>
            <h2 className='mb-5' >Welcome to Dev Story</h2>
            
            <button  onClick={handlesharestory} className="btn btn-dash btn-secondary">Share Story</button>
            <br />
           
        </div>
    );
};

export default Banner;