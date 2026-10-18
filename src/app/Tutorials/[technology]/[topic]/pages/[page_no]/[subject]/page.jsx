import React from 'react';
import chalk from 'chalk';
import Title from '@/components/Title';

const TutorialsTechnologhy = async ({params}) => {
   
    const {technology ,topic ,page_no,subject  } = await params;
   
    // console.log(technology ,topic ,page_no, subject )
    console.log(chalk.red(technology ,topic ,page_no, subject ));
    // ekhane chulk ta output e just colo dei thats it ..

    return (
        <div>
            <Title>{technology} tutorials Copy Cause [...slug ] </Title>
            <h2>{topic}</h2>
            <br />
            <div className='flex justify-between'>
                <h3 className='font-bold'>{subject}</h3>
                <p>Page no: {page_no}</p>
            </div>

        </div>
    );
};

export default TutorialsTechnologhy;



// Localhost:3000/Tutorials/react/useEffect()/pages/22/cleanup_function
