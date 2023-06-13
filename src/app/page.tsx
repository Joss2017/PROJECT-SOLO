'use client';
import axios from 'axios';
import Image from 'next/image';
import { type } from 'os';
import { useState } from 'react';

type Imageprops = {};

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-5xl font-bold mb-4'>
        Bienvenue sur le mon site !!!!
      </h1>
      <p className='text-lg text-center mb-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        gravida leo a mauris tristique, ut accumsan velit venenatis.
      </p>
    </div>
  );
}
