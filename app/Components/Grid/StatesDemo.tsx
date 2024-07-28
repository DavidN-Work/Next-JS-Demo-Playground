/*
 * File: StatesDemo.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 1:55:36 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import { Button, cn } from '@nextui-org/react';
import SimpleGridCard from './SimpleGridCard';
import { useState } from 'react';
import { HiMinus, HiPlus } from 'react-icons/hi2';
import { toast } from 'react-hot-toast';

export interface StatesDemoProps {
  className?: string;
}

const StatesDemo: React.FC<StatesDemoProps> = ({ className, ...rest }: StatesDemoProps) => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => {
      if (prevCount === 0) {
        toast.error("You can't see negative trucks!", { id: 'negative-trucks' });
        return prevCount;
      }
      return prevCount - 1;
    });
  };

  return (
    <SimpleGridCard
      {...rest}
      className={cn(className, '')}
      title="Use State Demo"
      tooltip="Increment and Decrement Function to show off React States"
    >
      <div className="flex flex-col justify-between h-full">
        <h1 className="text-lg tracking-wide font-semibold text-gray-900 text-center truncate">
          Yellow Trucks Spotted
        </h1>
        <div className="grid grid-cols-5 gap-x-4" role="main">
          <Button fullWidth onClick={handleDecrement} aria-label="Decrement" className="col-span-2">
            <HiMinus />
          </Button>
          <span
            className="text-xl font-semibold text-gray-900 text-center m-auto"
            aria-live="polite"
            aria-atomic="true"
            role="status"
          >
            {count}
          </span>
          <Button fullWidth onClick={handleIncrement} aria-label="Increment" className="col-span-2">
            <HiPlus />
          </Button>
        </div>
      </div>
    </SimpleGridCard>
  );
};

export default StatesDemo;
