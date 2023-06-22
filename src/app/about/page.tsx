import React from 'react';

const About = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='text-3xl font-bold my-8'>About me</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className=' p-4'>
          <p className='text-lg'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            auctor pretium lorem, eu varius massa hendrerit sit amet.
            Suspendisse ac dolor et est ullamcorper consequat nec eu ex.
          </p>
        </div>
        <div className=' p-4'>
          <p className='text-lg'>
            Fusce sed est orci. Proin auctor mauris ac diam congue, vel
            hendrerit turpis fringilla. Nam nec ipsum mauris. Sed finibus ligula
            eu convallis efficitur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
