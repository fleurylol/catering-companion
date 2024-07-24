'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import React from 'react';
import ItemSelect from './components/ItemSelect';

const CartPage = () => {
  return (
    <div className='p-2'>
      <Dialog>
        <DialogTrigger className='border w-full rounded-2xl bg-gray-200'>
          <div>+</div>
          <div>Add Tray</div>
        </DialogTrigger>
        <DialogContent className='bg-white h-4/5'>
          <DialogHeader>
            <DialogTitle>Item Selection</DialogTitle>
            <DialogDescription>
              <span className='flex space-x-3 justify-center'>
                <ItemSelect value='Hot' />
                <ItemSelect value='Cold' />
                <ItemSelect value='Box Meal' />
                <ItemSelect value='Salad Kit' />
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CartPage;
