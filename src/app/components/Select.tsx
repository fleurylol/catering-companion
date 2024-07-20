import React from 'react';

const Select = () => {
  return (
    <div className='fixed w-full bottom-0 z-50 pb-3'>
      <div className='rounded-3xl text-xl bg-slate-600 m-auto size-fit px-4'>
        <ul className='flex py-2 space-x-2'>
          <li className='rounded-2xl border-2 bg-slate-200 px-4 border-red-500'>
            Hot
          </li>
          <li className='rounded-2xl border-2 px-4 text-white'>Cold</li>
          <li className='rounded-2xl border-2 px-4 text-white'>Dry</li>
          <li className='rounded-2xl border-2 px-4 text-white'>Boxes</li>
        </ul>
      </div>
    </div>
  );
};

export default Select;
