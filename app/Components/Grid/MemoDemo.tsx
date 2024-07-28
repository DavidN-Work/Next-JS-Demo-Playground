/*
 * File: MemoDemo.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 2:17:20 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import React, { useState, useMemo } from 'react';
import { Input, Slider, Switch } from '@nextui-org/react';
import SimpleGridCard from './SimpleGridCard';

export interface MemoDemoProps {
  className?: string;
}

const factorial = (n: number): number => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const MemoDemo: React.FC<MemoDemoProps> = ({ className, ...rest }: MemoDemoProps) => {
  const [number, setNumber] = useState<number>(1);
  const [input, setInput] = useState<string>('1');
  const [useSlider, setUseSlider] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);
    const num = parseInt(value, 10);
    if (!isNaN(num)) {
      setNumber(num);
    }
  };

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      value = value[0];
    }
    setNumber(value);
    setInput(value.toString());
  };

  const factorialResult = useMemo(() => factorial(number), [number]);

  return (
    <SimpleGridCard
      {...rest}
      className={className}
      title="Use Memo Demo"
      tooltip="Calculate and display the factorial of a number to show off React useMemo hook"
    >
      <div className="flex flex-col justify-between flex-grow h-full space-y-4">
        <header className="text-center">
          <h1 className="text-lg tracking-wide font-semibold text-gray-900">
            Factorial Calculator
          </h1>
        </header>
        <main className="text-center" role="main">
          {useSlider ? (
            <Slider
              label="Number"
              step={1}
              maxValue={10}
              minValue={1}
              value={number}
              onChange={handleSliderChange}
              className="max-w-md"
              aria-valuetext={`Factorial value is ${factorialResult}`}
            />
          ) : (
            <Input
              aria-label="Number Input"
              type="number"
              value={input}
              onChange={handleInputChange}
              className="text-center"
            />
          )}
        </main>
        <div className="flex items-center justify-between">
          <Switch checked={useSlider} onChange={() => setUseSlider(!useSlider)} className="text-sm">
            {useSlider ? 'Use Input' : 'Use Slider'}
          </Switch>
          <p className="text-sm font-semibold text-gray-900" aria-live="polite" aria-atomic="true">
            Factorial: {factorialResult}
          </p>
        </div>
      </div>
    </SimpleGridCard>
  );
};

export default MemoDemo;
