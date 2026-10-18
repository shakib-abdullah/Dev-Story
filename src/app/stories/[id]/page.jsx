
import DeveloperDetailsCard from '@/components/DeveloperDetailsCard';
import { developers } from '@/app/stories/page';
import { notFound } from 'next/navigation';
import React from 'react';

const DetailsPage = async ({ params }) => {
    const { id } = await params;
    const developer = developers.find((item) => item.id === Number(id));

    if (!developer) {
        notFound();
    }

    return (
        <div>
            <DeveloperDetailsCard developer={developer} />
        </div>
    );
};

export default DetailsPage;