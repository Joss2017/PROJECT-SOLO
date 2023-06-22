import axios from 'axios';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='relative flex flex-col items-center justify-center h-screen'>
      <div className='absolute inset-0 z-0'>
        <Image
          src='/unicorn.webp'
          alt='Unicorn Background'
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <h1 className='text-5xl font-bold mb-4 z-10'>
        Bienvenue sur mon site !!!!
      </h1>
      <p className='text-lg text-center mb-8 z-10'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        gravida leo a mauris tristique, ut accumsan velit venenatis.
      </p>
    </div>
  );
}
