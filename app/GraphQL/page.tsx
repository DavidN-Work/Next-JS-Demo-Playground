/*
 * File: page.tsx
 * Project: demo-app
 * Created Date: Monday, July 29th 2024, 8:20:54 am
 * Author: David Ngo
 * -----
 * Last Modified: Mon Jul 29 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import React from 'react';
import { useQuery } from '@apollo/client';
import client from '../../utils/apollo';
import { GET_PRODUCTS } from './Queries/SampleProducts';
import { Spinner } from '@nextui-org/react';
import { TProduct } from './Types/TProduct';
import Image from 'next/image';

const GraphQLPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS, { client });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600">Error: {error.message}</p>
      </div>
    );
  }

  console.log(data);

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 overflow-y-auto">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.products.data.map((product: TProduct) => {
            const { id, attributes } = product;
            const { name, description, price, image } = attributes;
            return (
              <div key={id} className="border p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">{name}</h2>
                <div className="mb-4">
                  {description.map((desc, index) => (
                    <p key={index}>{desc.children.map(child => child.text).join(' ')}</p>
                  ))}
                </div>
                <p className="text-lg font-bold mb-2">${price.toFixed(2)}</p>
                {image?.data?.attributes && (
                  <div className="relative aspect-video">
                    <Image
                      fill
                      src={`${image.data.attributes.url}`}
                      alt={name}
                      className="mt-2 w-full h-auto rounded object-cover object-center"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GraphQLPage;
