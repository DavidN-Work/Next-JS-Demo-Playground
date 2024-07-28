/*
 * File: DetailedRouteSelector.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 1:33:13 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import React from 'react';
import { cn } from '@nextui-org/react';
import Link from 'next/link';
import routeSelectorSample from './Data/routeSelectorSample.data';

export interface RouteItem {
  title: string;
  description: string;
  icon: React.ElementType;
  background: string;
  href: string;
}

export interface DetailedRouteSelectorProps {
  className?: string;
  items: RouteItem[];
  renderHeader?: () => React.ReactNode;
  renderItem?: (item: RouteItem, index: number) => React.ReactNode;
  title: string;
  desc?: string;
  bottomLink?: string;
  bottomLabel?: string;
}

const DetailedRouteSelector: React.FC<DetailedRouteSelectorProps> = ({
  className,
  items = routeSelectorSample,
  renderHeader,
  renderItem,
  title = 'Not Set',
  desc,
  bottomLink,
  bottomLabel = 'Not Set',
  ...rest
}) => {
  return (
    <div {...rest} className={cn(className, 'w-full')}>
      {renderHeader ? (
        renderHeader()
      ) : (
        <>
          <h2 className="text-base font-semibold leading-6 text-gray-900">{title}</h2>
          {desc && <p className="mt-1 text-sm text-gray-500">{desc}</p>}
        </>
      )}
      <ul
        role="list"
        className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2"
      >
        {items.map((item, index) =>
          renderItem ? (
            renderItem(item, index)
          ) : (
            <li key={index} className="flow-root">
              <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                <div
                  className={cn(
                    item.background,
                    'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                  )}
                >
                  <item.icon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <Link href={item.href} className="focus:outline-none">
                      <span aria-hidden="true" className="absolute inset-0" />
                      <span>{item.title}</span>
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </li>
          )
        )}
      </ul>
      {bottomLink && (
        <div className="mt-4 flex">
          <Link
            href={bottomLink}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            {bottomLabel}
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default DetailedRouteSelector;
