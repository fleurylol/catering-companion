import { ShoppingCart } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <>
      <div className='bg-[#DD0031] text-white p-3'>
        <div>
          <ul className='flex justify-between'>
            <li>
              <Link href='/'>Catering Companion</Link>
            </li>
            <li>
              <Link href='/cart'>
                <ShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
