'use client'
import React from 'react';

const page = ({ params }) => {
   
    const productId = params.productId

    return (
        <div>
            Product {productId}
        </div>
    );
};

export default page;