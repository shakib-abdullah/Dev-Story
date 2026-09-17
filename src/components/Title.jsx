import React from 'react';

const Title = ({ children }) => {
    return (
        <div className='bg-gradient-to-r from-slate-950 via-slate-900 to-purple-900 px-6 py-10 shadow-lg'>
            <h2 className='text-5xl font-bold tracking-tight text-white'>{children}</h2>
        </div>
    );
};

export default Title;