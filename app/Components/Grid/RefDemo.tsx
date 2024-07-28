/*
 * File: RefDemo.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 2:59:41 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import React, { useRef, useState } from 'react';
import { Button, Input } from '@nextui-org/react';
import SimpleGridCard from './SimpleGridCard';

export interface RefDemoProps {
  className?: string;
}

const RefDemo: React.FC<RefDemoProps> = ({ className, ...rest }: RefDemoProps) => {
  const [inputValue, setInputValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusAndReset = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setInputValue('');
    }
  };

  return (
    <SimpleGridCard
      {...rest}
      className={className}
      title="Use Ref Demo"
      tooltip="Focus and reset input field to show off React useRef hook"
    >
      <div className="flex flex-col justify-between h-full space-y-4">
        <header className="text-center">
          <h1 className="text-lg tracking-wide font-semibold text-gray-900">Input Focus & Reset</h1>
        </header>
        <main className="flex flex-col items-center justify-center flex-grow" role="main">
          <Input
            aria-label="Demo Input"
            type="text"
            placeholder="Type something..."
            ref={inputRef}
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            className="text-center"
          />
        </main>
        <Button
          onClick={handleFocusAndReset}
          aria-label="Focus and Reset Input"
          className="font-bold"
          fullWidth
        >
          Focus and Reset
        </Button>
      </div>
    </SimpleGridCard>
  );
};

export default RefDemo;
