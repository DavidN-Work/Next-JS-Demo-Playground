/*
 * File: page.tsx
 * Project: demo-app
 * Created Date: Sunday, July 28th 2024, 6:13:54 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sun Jul 28 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import React, { useState } from 'react';
import Card from './Components/Card';
import { TListOrderItem } from './Types/TListOrderItem';
import { Button } from '@nextui-org/react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi2';
import cardData from './Data/cardData';

const FramerMotionPage: React.FC = () => {
  const [order, setOrder] = useState<TListOrderItem[]>(['front', 'middle', 'back']);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as TListOrderItem);
    setOrder(orderCopy);
  };

  const handleShuffleLeft = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as TListOrderItem);
    setOrder(orderCopy);
  };

  const handleShuffleRight = () => {
    const orderCopy = [...order];
    orderCopy.push(orderCopy.shift() as TListOrderItem);
    setOrder(orderCopy);
  };

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 w-full select-none">
      <div className="flex items-center justify-center h-full overflow-hidden w-full ">
        <div className="">
          <h1 className="mb-14 text-2xl font-semibold tracking-wide leading-6">
            Framer Motion Demo
          </h1>
          <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
            {order.map((position, index) => (
              <Card
                key={index}
                imgUrl={cardData[index].imgUrl}
                testimonial={cardData[index].testimonial}
                author={cardData[index].author}
                handleShuffle={handleShuffle}
                position={position}
              />
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={handleShuffleLeft}
              startContent={<HiArrowLeft />}
              className="mt-14 font-bold"
            >
              Shuffle Left
            </Button>
            <Button
              onClick={handleShuffleRight}
              endContent={<HiArrowRight />}
              className="mt-14 font-bold"
            >
              Shuffle Right
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FramerMotionPage;
