import React from 'react';

import HeaderTitle from '../Utilities/HeaderTitle/HeaderTitle';
import Button from '../Utilities/Button';

const Choose = () => {
    const chooseData = [
        {
            title: 'Luxury facilities',
            description: 'The advantage of hiring a workspace with us is that it gives you comfortable service and all-around facilities.'
        },
        {
            title: 'Affordable price',
            description: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.'
        },
        {
            title: 'Many Choices',
            description: 'You can get a workspace of the highest quality at an affordable price and still enjoy the facilities that are only here.'
        },
    ];

    return (
        <div className='lg:container mx-auto py-[120px] px-6 lg:px-12'>
            <div className="md:flex items-center justify-between gap-6 space-y-8 md:space-y-0">
                <div className='max-w-[300px] h-auto w-full'>
                    <HeaderTitle title={'Why Choose Us'} />
                </div>

                <div className='grid md:grid-cols-3 gap-8 items-center'>
                    {chooseData?.map((item, indx) => (
                        <div 
                            key={indx} 
                            className='bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300'
                        >
                            <h3 className='text-2xl text-[#1e1e1e] font-bold capitalize hover:text-blue-500 transition-colors duration-300'>
                                {item?.title}
                            </h3>
                            <p className='text-base text-gray-600 font-normal mt-4'>
                                {item?.description}
                            </p>
                            <div className='mt-6'>
                                <Button content={'More Info'} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Choose;
