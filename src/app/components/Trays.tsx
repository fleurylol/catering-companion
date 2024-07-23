import React from 'react';
import { hotTrays } from '@/trays/hotTrays';
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
      <div className='gap-2 p-2 grid grid-cols-3 md:max-w-[400px] m-auto'>
        {hotTrays.map((tray) => (
          <div key={tray.name} className='text-pretty size-fit text-center'>
            <Image src={tray.img} alt={tray.name} width={150} height={150} />
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
      <SheetTrigger>{tray.name}</SheetTrigger>
      <SheetContent side={'bottom'} className='h-[75%] bg-white'>
        <SheetHeader>
          <SheetTitle>{tray.name}</SheetTitle>
          <SheetDescription>
            {tray.variants && <div>Variants - {tray.variants}</div>}
            <div className='flex flex-col items-center'>
              <Image src={tray.img} alt={tray.name} width={200} height={200} />
              <div>
                <span className='font-semibold'>Utensil: </span>
                {tray.utensil}
              </div>
              <Table>
                {tray.notes && <TableCaption>{tray.notes}</TableCaption>}

                <TableHeader>
                  <TableRow>
                    <TableHead>Size</TableHead>
                    <TableHead>Serving</TableHead>
                    <TableHead>Quantity</TableHead>
                    {tray.sizes.small?.free8oz && (
                      <TableHead className='text-nowrap'>8oz Sauce</TableHead>
                    )}
                    {tray.sizes.small?.honey && <TableHead>Honey</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    {tray.sizes.small && <TableHead>S - 10</TableHead>}
                    <TableCell>{tray.sizes.small?.serving_size}</TableCell>
                    <TableCell>{tray.sizes.small?.quantity}</TableCell>
                    {tray.sizes.small?.free8oz && (
                      <TableCell>{tray.sizes.small?.free8oz}</TableCell>
                    )}
                    {tray.sizes.small?.honey && (
                      <TableCell>{tray.sizes.small?.honey}</TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    {tray.sizes.medium && <TableHead>M - 14</TableHead>}
                    <TableCell>{tray.sizes.medium?.serving_size}</TableCell>
                    <TableCell>{tray.sizes.medium?.quantity}</TableCell>
                    {tray.sizes.small?.free8oz && (
                      <TableCell>{tray.sizes.small?.free8oz}</TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    {tray.sizes.large && <TableHead>L - 16</TableHead>}
                    <TableCell>{tray.sizes.large?.serving_size}</TableCell>
                    <TableCell>{tray.sizes.large?.quantity}</TableCell>
                    {tray.sizes.small?.free8oz && (
                      <TableCell>{tray.sizes.large?.free8oz}</TableCell>
                    )}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Trays;
