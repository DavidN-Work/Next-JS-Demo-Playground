/*
 * File: routeSelectorSample.data.ts
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 1:33:48 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import { HiAdjustments } from 'react-icons/hi';
import { RouteItem } from '../DetailedRouteSelector';

const routeSelectorSample: RouteItem[] = [
  {
    title: 'Form Validation with WCAG 2.2 Compliance',
    description:
      'Implement form validation using React Hook Form and Yup for schema validation, styled with NextUI for a seamless user experience.',
    icon: HiAdjustments,
    background: 'bg-pink-500',
    href: '/Contact',
  },
  {
    title: 'Pathname Routing with NextJS',
    description:
      'Utilize Next.js search parameters and pathname routing for dynamic item selection and navigation.',
    icon: HiAdjustments,
    background: 'bg-yellow-500',
    href: '/Items/1',
  },
  {
    title: 'Pagination Testing with Tanstack Query & Axios',
    description:
      'Implement pagination in Next UI tables using asynchronous API calls with Tanstack Query and Axios for data fetching.',
    icon: HiAdjustments,
    background: 'bg-green-500',
    href: '/Pagination',
  },
  {
    title: 'GraphQL Testing with Apollo Client and Strapi CMS',
    description:
      'Explore GraphQL queries and mutations using Apollo Client integrated with Strapi CMS for content management.',
    icon: HiAdjustments,
    background: 'bg-blue-500',
    href: '/GraphQL',
  },
  {
    title: 'Framer Motion',
    description:
      'Create engaging animations with Framer Motion, including a simple card shuffle effect for interactive UI elements.',
    icon: HiAdjustments,
    background: 'bg-indigo-500',
    href: '/Framer-Motion',
  },
  {
    title: 'Anime JS',
    description:
      'Develop a dynamic water pump level indicator using Anime JS for smooth animations and user interactions.',
    icon: HiAdjustments,
    background: 'bg-purple-500',
    href: '/Anime-JS',
  },
];

export default routeSelectorSample;
