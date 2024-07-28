/*
 * File: SimpleGridCard.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 1:41:19 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import { cn, Tooltip } from '@nextui-org/react';
import { HiQuestionMarkCircle } from 'react-icons/hi2';

export interface SimpleGridCardProps {
  className?: string;
  title: string;
  tooltip: string;
  children: React.ReactNode;
}

const SimpleGridCard: React.FC<SimpleGridCardProps> = ({
  className,
  title = 'Not Set',
  tooltip = 'Not Set',
  children,
  ...rest
}: SimpleGridCardProps) => {
  return (
    <div {...rest} className={cn(className, 'shadow-lg rounded-lg flex flex-col h-full')}>
      <div className="text-sm font-bold text-gray-600 bg-gray-100 rounded-t-lg shadow-lg flex justify-between p-2">
        <p>{title}</p>
        <Tooltip
          content={tooltip}
          showArrow={true}
          delay={0}
          closeDelay={0}
          motionProps={{
            variants: {
              exit: {
                opacity: 0,
                transition: {
                  duration: 0.1,
                  ease: 'easeIn',
                },
              },
              enter: {
                opacity: 1,
                transition: {
                  duration: 0.15,
                  ease: 'easeOut',
                },
              },
            },
          }}
        >
          <button>
            <HiQuestionMarkCircle className="text-lg hover:text-emerald-400" />
          </button>
        </Tooltip>
      </div>
      <div className="p-4 flex-grow">{children}</div>
    </div>
  );
};

export default SimpleGridCard;
