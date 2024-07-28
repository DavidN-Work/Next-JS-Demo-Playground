/*
 * File: EffectDemo.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 2:09:25 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Button, cn, Spinner } from '@nextui-org/react';
import SimpleGridCard from './SimpleGridCard';
import { toast, Toaster } from 'react-hot-toast';

export interface EffectDemoProps {
  className?: string;
}

const EffectDemo: React.FC<EffectDemoProps> = ({ className, ...rest }: EffectDemoProps) => {
  const [fact, setFact] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://uselessfacts.jsph.pl/random.json?language=en');
      const data = await response.json();
      setFact(data.text);
      setLoading(false);
    } catch (error) {
      toast.error('Failed to fetch fact. Please try again.', { id: 'fetch-error' });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFact();
  }, []);

  return (
    <SimpleGridCard
      {...rest}
      className={cn(className, '')}
      title="Use Effect Demo"
      tooltip="Fetch and display a random fact to show off React useEffect hook"
    >
      <Toaster />
      <div className="flex flex-col flex-1 justify-between space-y-4">
        <header className="text-center">
          <h1 className="text-lg tracking-wide font-semibold text-gray-900">Random Fact</h1>
        </header>
        <main className="flex-grow text-center" role="main">
          {loading ? (
            <Spinner aria-label="Loading" />
          ) : (
            <p className="text-gray-900 text-sm" role="contentinfo">
              {fact}
            </p>
          )}
        </main>
        <div className="flex justify-center">
          <Button onClick={fetchFact} aria-label="Fetch New Fact" className="font-bold" fullWidth>
            Fetch New Fact
          </Button>
        </div>
      </div>
    </SimpleGridCard>
  );
};

export default EffectDemo;
