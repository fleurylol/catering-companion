import React from 'react';
import { allTrays } from '@/trays/allTrays';
import Image from 'next/image';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { TrayInfoProps } from '@/trays/trayType';

const Trays = () => {
  return (
    <>
      <div className='gap-2p-2 grid grid-cols-3 md:max-w-[400px] m-auto text-center'>
        {allTrays.map((tray) => (
          <div key={tray.name} className='text-pretty text-center'>
            <TrayInfo tray={tray} />
          </div>
        ))}
      </div>
    </>
  );
};

const TrayInfo: React.FC<TrayInfoProps> = ({ tray }) => {
  return (
    <Sheet>
      <SheetTrigger className='rounded-xl p-1'>
        <Image src={tray.img} alt={tray.name} width={150} height={150} />
        {tray.name}
      </SheetTrigger>
      <SheetContent side={'bottom'} className='h-[75%] bg-white'>
        <SheetHeader>
          <SheetTitle className='text-balance'>{tray.name}</SheetTitle>
          <SheetDescription>
            {tray.variants && <div>Variants - {tray.variants}</div>}
            <div className='flex flex-col items-center'>
              <Image src={tray.img} alt={tray.name} width={200} height={200} />
              <div>
                <span className='font-semibold'>Utensil: </span>
                {tray.utensil}
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Size</th>
                    <th>Serving</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {tray.sizes.small && (
                    <tr>
                      <td>Small</td>
                      <td>{tray.sizes.small.serving_size}</td>
                      <td>{tray.sizes.small.quantity}</td>
                    </tr>
                  )}
                  {tray.sizes.medium && (
                    <tr>
                      <td>Medium</td>
                      <td>{tray.sizes.medium.serving_size}</td>
                      <td>{tray.sizes.medium.quantity}</td>
                    </tr>
                  )}
                  {tray.sizes.large && (
                    <tr>
                      <td>Large</td>
                      <td>{tray.sizes.large.serving_size}</td>
                      <td>{tray.sizes.large.quantity}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Trays;
