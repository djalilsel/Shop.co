import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
    redirect('/home')
    return (
        <div>
            Home route
        </div>
    );
};

export default page;