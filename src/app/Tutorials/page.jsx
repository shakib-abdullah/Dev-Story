import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';
import { RxButton } from 'react-icons/rx';

const Tutorials = () => {
    return (
        <div>
            <Title>This is from  Tutorial route </Title>
            <div className='flex gap-10 ml-8'>
                <Link
                href='Tutorials/react/useEffect()/pages/22/cleanup_function' 
                className='btn btn-soft btn-primary'
                > Go to  Tutorials Route</Link>
                <Link
                href='TutorialsCopy/react/useEffect()/pages/22/cleanup_function' 
                className='btn btn-soft btn-primary'
                > Go to TutorialsCopy Route Using ...Slug</Link>
            </div>
            
        </div>

        
    );
};
 
export default Tutorials;