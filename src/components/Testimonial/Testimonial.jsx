import React from 'react';
import HeaderTitle from '../Utilities/HeaderTitle/HeaderTitle';
import TestimonialSlider from '../TestimonialSlider/TestimonialSlider';

const Testimonial = () => {
    const clientReviews = [
        {
            name: 'Bang Upin',
            avatar: '/avater_1.png',
            review: 'I am very happy with the service and the quality of the furniture. The design is modern and fits perfectly in my home. Highly recommend!',
            rating: 5,
            image: '/client_1.png',
        },
        {
            name: 'Ibuk Sukjan',
            avatar: '/avater_2.png',
            review: 'The furniture quality and service are fantastic. Everything was delivered on time and looks amazing in my space.',
            rating: 4.5,
            image: '/client_2.png',
        },
        {
            name: 'Mpok Ina',
            avatar: '/avater_3.png',
            review: 'Great service and the furniture exceeded my expectations. I will definitely recommend this to my friends.',
            rating: 3.5,
            image: '/client_3.png',
        },
        {
            name: 'Bang Joni',
            avatar: '/avater_1.png',
            review: 'The designs are modern and sleek. It fits perfectly in my home. Great experience overall!',
            rating: 4,
            image: '/client_1.png',
        },
    ];

    return (
        <div className='lg:container mx-auto w-full px-4 md:px-8 md:pt-[240px] pt-[180px] md:pb-[200px] pb-[130px] bg-white'>
            <div className="flex flex-col items-center w-full justify-center mb-10">
                <HeaderTitle title="Our Client Reviews" subtitle="Testimonial" />
            </div>

            {/* Testimonial Slider */}
            <div>
                <TestimonialSlider content={clientReviews} />
            </div>
        </div>
    );
};

export default Testimonial;
