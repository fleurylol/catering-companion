import React from 'react';
import { hotTrays } from '@/trays/hotTrays';
import Image from 'next/image';

const Trays = () => {
  return (
    <div>
      {hotTrays.map((tray) => (
        <div key={tray.name} className='grid grid-cols-3'>
          <h1>{tray.name}</h1>
          <Image src={tray.img} alt={tray.name} width={100} height={100} />
          <p>{tray.type}</p>
          <p>{tray.utensil}</p>
          <p>{tray.sizes.small?.serving_size}</p>
          <p>{tray.sizes.small?.quantity}</p>
          <p>{tray.sizes.medium?.serving_size}</p>
          <p>{tray.sizes.medium?.quantity}</p>
          <p>{tray.sizes.large?.serving_size}</p>
          <p>{tray.sizes.large?.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default Trays;
