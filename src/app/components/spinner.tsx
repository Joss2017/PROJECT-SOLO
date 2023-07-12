import React from 'react';
import Image from 'next/image';

import { defineCustomElements } from 'wcs-core/loader';
const spinner = () => {
  defineCustomElements();
  return (
    <div>
      <div>
        <br />
        <Image
          src='/Spin-1.2s-200px.svg'
          width={100}
          height={100}
          alt='spinner'
          className='mx-auto block'
        />
      </div>
    </div>
  );
};

export default spinner;
