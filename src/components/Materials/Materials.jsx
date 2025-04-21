import React from 'react';
import Button from '../Utilities/Button';
import HeaderTitle from '../Utilities/HeaderTitle/HeaderTitle';

const Materials = () => {
  return (
    <div className='lg:container mx-auto w-full px-4 md:px-8 md:pb-[200px] pb-[150px]'>
      <div className='md:flex items-center justify-between gap-[200px] space-y-8 md:space-y-0'>

        {/* Text Section */}
        <div className="max-w-[565px] w-full h-auto">
          <HeaderTitle title={'Very Serious Materials for Making Furniture'} subtitle={'Materials'} />
          <p className='text-lg text-[#1e1e1e] font-normal mt-4 mb-4'>
            Because Panto was very serious about designing furniture for our environment, using very expensive and famous capital but at a relatively low price.
          </p>
          <Button content={'More Info'} />
        </div>

        {/* Images Section */}
        <div className="flex items-center gap-6">
          <div className='flex flex-col gap-4'>
            <img
              src="/materials_1.png"
              className='max-w-[250px] min-h-[300px] rounded-xl w-full h-full object-cover'
              alt="Material 1"
            />
            <img
              src="/materials_2.png"
              className='max-w-[250px] min-h-[350px] h-full w-full object-cover'
              alt="Material 2"
            />
          </div>
          <div>
            <img
              src="/materials_3.png"
              className='max-w-[620px] w-full min-h-[480px] h-full object-cover rounded-xl'
              alt="Material 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Materials;
