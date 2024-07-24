'use client';
import React from 'react';

// Define a type for the props to make it clear what the component expects
interface ItemSelectProps {
  value: string;
}
const ItemSelect: React.FC<ItemSelectProps> = (props) => {
  const { value } = props;

  const handleSelect = () => {
    console.log(value);
  };

  return (
    <button
      className='px-2 py-1 text-base rounded-2xl cursor-pointer'
      onClick={handleSelect}
    >
      {value}
    </button>
  );
};

export default ItemSelect;
