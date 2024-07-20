import React from 'react';
import Image from 'next/image';
import Select from '../components/Select';
import { TrayInfoProps } from '@/trays/trayType';
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

const tray = {
  type: 'Hot',
  img: 'https://www.cfacdn.com/img/order/menu/Online/Trays/nuggetTray_md_PDP_Desk.png',
  name: 'Nugget Tray',
  variants: ['Chilled'],
  utensil: 'Tong',
  notes: null,
  sizes: {
    small: {
      serving_size: 8,
      quantity: 64,
      honey: null,
      free8oz: 1,
      roasted_almonds: null,
      dressings: null,
    },
    medium: {
      serving_size: 15,
      quantity: 120,
      honey: null,
      free8oz: 1,
      roasted_almonds: null,
      dressings: null,
    },
    large: {
      serving_size: 25,
      quantity: 200,
      honey: null,
      free8oz: 2,
      roasted_almonds: null,
      dressings: null,
    },
  },
};
const UiTest = () => {
  return (
    <>
      <div className='gap-2 p-2 grid grid-cols-3 md:max-w-[400px] m-auto'>
        <div className='border-2 rounded-lg border-neutral-600 size-fit text-center'>
          <Image src={tray.img} alt={tray.name} width={150} height={150} />
          <TrayInfo tray={tray} />
        </div>
        <div className='border-2 rounded-lg border-neutral-600 size-fit text-center'>
          <Image src={tray.img} alt={tray.name} width={150} height={150} />
          <TrayInfo tray={tray} />
        </div>
        <div className='border-2 rounded-lg border-neutral-600 size-fit text-center'>
          <Image src={tray.img} alt={tray.name} width={150} height={150} />
          <TrayInfo tray={tray} />
        </div>
      </div>
      <Select />
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
            <div>Variants - {tray.variants}</div>
            <div className='border flex flex-col items-center'>
              <Image src={tray.img} alt={tray.name} width={200} height={200} />
              <div>
                <span className='font-semibold'>Utensil: </span>
                {tray.utensil}
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Size</TableHead>
                    <TableHead>Serving</TableHead>
                    <TableHead>Quantity</TableHead>
                    {tray.sizes.small?.free8oz && (
                      <TableHead className='text-nowrap'>8oz Sauce</TableHead>
                    )}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>S - 10</TableCell>
                    <TableCell>{tray.sizes.small?.serving_size}</TableCell>
                    <TableCell>{tray.sizes.small?.quantity}</TableCell>
                    {tray.sizes.small?.free8oz && (
                      <TableCell>{tray.sizes.small?.free8oz}</TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    <TableCell>M - 14</TableCell>
                    <TableCell>{tray.sizes.medium?.serving_size}</TableCell>
                    <TableCell>{tray.sizes.medium?.quantity}</TableCell>
                    {tray.sizes.small?.free8oz && (
                      <TableCell>{tray.sizes.small?.free8oz}</TableCell>
                    )}
                  </TableRow>
                  <TableRow>
                    <TableCell>L - 16</TableCell>
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

export default UiTest;
