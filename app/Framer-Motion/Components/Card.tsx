/*
 * File: Card.tsx
 * Project: demo-app
 * Created Date: Sunday, July 28th 2024, 6:18:02 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sun Jul 28 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import { cn } from '@nextui-org/react';
import { useRef } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { TListOrderItem } from '../Types/TListOrderItem';
import Image from 'next/image';

export interface CardProps {
  className?: string;
  handleShuffle: () => void;
  testimonial: string;
  position: TListOrderItem;
  imgUrl: string;
  author: string;
}

const Card: React.FC<CardProps> = ({
  className,
  handleShuffle,
  testimonial,
  position,
  imgUrl,
  author,
  ...rest
}: CardProps) => {
  // Use a ref to keep track of the mouse position
  const mousePosRef = useRef<number>(0);

  // Handler for the drag start event
  const onDragStart = (e: MouseEvent | TouchEvent | PointerEvent) => {
    if ('clientX' in e) {
      mousePosRef.current = e.clientX; // Mouse event
    } else if ('touches' in e && e.touches.length > 0) {
      mousePosRef.current = e.touches[0].clientX; // Touch event
    }
  };

  // Handler for the drag end event
  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    let clientX: number;
    if ('clientX' in e) {
      clientX = e.clientX; // Mouse event
    } else if ('changedTouches' in e && e.changedTouches.length > 0) {
      clientX = e.changedTouches[0].clientX; // Touch event
    } else {
      return;
    }

    // Calculate the drag distance
    const diff = mousePosRef.current - clientX;

    // Trigger the shuffle function if the drag distance is greater than 150px
    if (diff > 150) {
      handleShuffle();
    }

    // Reset the mouse position reference
    mousePosRef.current = 0;
  };

  // Determine the card's position and styling based on the position prop
  const x = position === 'front' ? '0%' : position === 'middle' ? '33%' : '66%';
  const rotateZ = position === 'front' ? '-6deg' : position === 'middle' ? '0deg' : '6deg';
  const zIndex = position === 'front' ? '2' : position === 'middle' ? '1' : '0';

  // Only allow dragging if the card is in the front position
  const draggable = position === 'front';

  return (
    <motion.div
      role="group" // ARIA role for grouping elements
      aria-roledescription="testimonial card" // ARIA description
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      {...rest}
      className={cn(
        className,
        'absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-gray-100 bg-gray-200/30 p-6 shadow-xl backdrop-blur-md',
        draggable ? 'cursor-grab active:cursor-grabbing' : ''
      )}
    >
      <div className="h-32 w-32 relative mx-auto">
        <Image
          fill
          src={imgUrl}
          alt={`Image of ${author}`}
          className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-300/20 bg-slate-200 object-cover"
        />
      </div>
      <blockquote
        className="select-none text-center text-lg italic text-slate-700"
        aria-label="testimonial"
      >
        {testimonial}
      </blockquote>
      <cite
        className="select-none text-center text-sm font-medium text-amber-600"
        aria-label="author"
      >
        {author}
      </cite>
    </motion.div>
  );
};

export default Card;
