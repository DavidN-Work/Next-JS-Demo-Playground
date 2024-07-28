/*
 * File: Logo.tsx
 * Project: demo-app
 * Created Date: Friday, July 26th 2024, 8:26:29 pm
 * Author: David Ngo
 * -----
 * Last Modified: Fri Jul 26 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import { cn } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export interface LogoProps {
  className?: string;
  href?: string;
  imageAlt: string;
  srLabel: string;
  darkModeImgSrc?: string;
  lightModeImgSrc?: string;
  imgHeight?: string;
  theme?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({
  className,
  href = '/',
  imageAlt = 'Missing Image Description',
  srLabel = 'Missing Screen Reader Label',
  darkModeImgSrc = '/LogoDarkMode.svg',
  lightModeImgSrc = '/LogoLightMode.svg',
  imgHeight = 'h-10',
  theme = 'light',
  ...rest
}: LogoProps) => {
  return (
    <Link {...rest} href={href}>
      <span className="sr-only">{srLabel}</span>
      <Image
        alt={imageAlt}
        src={theme === 'light' ? lightModeImgSrc : darkModeImgSrc}
        className={cn('w-auto stroke-current', imgHeight)}
        width="0"
        height="0"
        sizes="100vw"
      />
    </Link>
  );
};

export default Logo;
