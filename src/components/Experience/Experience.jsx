import React from 'react';
import HeaderTitle from '../Utilities/HeaderTitle/HeaderTitle';
import Button from '../Utilities/Button';

const Experiences = () => {
    return (
        <div className='lg:container mx-auto w-full px-4 md:px-8 md:py-[300px] py-[200px] bg-white'>
            <div className='md:flex justify-between gap-[200px] space-y-8 md:space-y-0'>

                {/* Image Section */}
                <div className="max-w-[630px] w-full h-auto shadow-xl">
                    <img
                        src="/experiences.png"
                        className='object-cover w-full h-auto rounded-l-2xl'
                        alt="Experience Image"
                    />
                </div>

                {/* Text Section */}
                <div className="max-w-[565px] w-full h-auto">
                    <HeaderTitle title={'We Provide You The Best Experience'} subtitle={'Experience'} />
                    <p className='text-lg text-[#1e1e1e] font-normal mt-4 mb-4'>
                        You don't have to worry about the result because all of these interiors are made by professionals in their fields with an elegant and luxurious style, using premium quality materials.
                    </p>
                    <Button content={'More Info'} />
                </div>
            </div>
        </div>
    );
};

export default Experiences;
