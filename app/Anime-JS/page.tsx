/*
 * File: page.tsx
 * Project: demo-app
 * Created Date: Sunday, July 28th 2024, 6:13:39 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sun Jul 28 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import anime from 'animejs';
import React, { useEffect, useRef, useState } from 'react';

const AnimeJSPage = () => {
  const tankRef = useRef<HTMLDivElement | null>(null);
  const waterRef = useRef<HTMLDivElement | null>(null);
  const [waterLevel, setWaterLevel] = useState(50);

  const updateWaterLevel = (level: number) => {
    setWaterLevel(level);
    anime({
      targets: waterRef.current,
      height: `${level}%`,
      duration: 500,
      easing: 'easeInOutQuad',
    });
  };

  const handleMouseDown = (e: MouseEvent | React.MouseEvent) => {
    if (!tankRef.current) return;
    const tankRect = tankRef.current.getBoundingClientRect();
    const onMouseMove = (event: MouseEvent) => {
      const newY = Math.min(Math.max(event.clientY - tankRect.top, 0), tankRect.height);
      const newLevel = ((tankRect.height - newY) / tankRect.height) * 100;
      updateWaterLevel(newLevel);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener(
      'mouseup',
      () => {
        document.removeEventListener('mousemove', onMouseMove);
      },
      { once: true }
    );
  };

  const increaseWaterLevel = () => {
    const newLevel = Math.min(waterLevel + 10, 100);
    updateWaterLevel(newLevel);
  };

  const decreaseWaterLevel = () => {
    const newLevel = Math.max(waterLevel - 10, 0);
    updateWaterLevel(newLevel);
  };

  useEffect(() => {
    const tankElement = tankRef.current;
    if (tankElement) {
      tankElement.addEventListener('mousedown', handleMouseDown as EventListener);
    }
    return () => {
      if (tankElement) {
        tankElement.removeEventListener('mousedown', handleMouseDown as EventListener);
      }
    };
  }, []);

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
      <div
        className="relative w-40 h-80 border-4 border-blue-500 rounded-md overflow-hidden"
        ref={tankRef}
      >
        <div
          className="absolute bottom-0 left-0 w-full bg-blue-500"
          ref={waterRef}
          style={{ height: `${waterLevel}%` }}
        ></div>
      </div>
      <div className="mt-10 text-xl w-96 text-center">
        <p>Water Level: {Math.round(waterLevel)}%</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={decreaseWaterLevel}
          >
            Decrease
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={increaseWaterLevel}
          >
            Increase
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimeJSPage;
