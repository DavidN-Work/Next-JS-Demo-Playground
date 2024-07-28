/*
 * File: page.tsx
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 6:12:05 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { Radio, RadioGroup } from '@headlessui/react';
import product from './Data/product.data';
import policies from './Data/policies.data';
import { cn } from '@nextui-org/react';
import { HiStar } from 'react-icons/hi2';

const ItemPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the selected color and size from URL parameters or default to the first color and third size
  const selectedColorParam = searchParams.get('color') || product.colors[0].name;
  const selectedSizeParam = searchParams.get('size') || product.sizes[2].name;

  // Find the selected color and size objects from the product data
  const selectedColor =
    product.colors.find(color => color.name === selectedColorParam) || product.colors[0];
  const selectedSize =
    product.sizes.find(size => size.name === selectedSizeParam) || product.sizes[2];

  // Handle changes in color selection and update the URL parameters
  const handleColorChange = (color: { name: string; bgColor: string; selectedColor: string }) => {
    const params = new URLSearchParams(searchParams);
    params.set('color', color.name);
    router.replace(`?${params.toString()}`);
  };

  // Handle changes in size selection and update the URL parameters
  const handleSizeChange = (size: { name: string; inStock: boolean }) => {
    const params = new URLSearchParams(searchParams);
    params.set('size', size.name);
    router.replace(`?${params.toString()}`);
  };

  return (
    <div className="overflow-auto mx-auto w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          {/* Product Information */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="flex justify-between">
              <h1 className="text-xl font-medium text-gray-900">{product.name}</h1>
              <p className="text-xl font-medium text-gray-900">{product.price}</p>
            </div>
            {/* Reviews */}
            <div className="mt-4">
              <h2 className="sr-only">Reviews</h2>
              <div className="flex items-center">
                <p className="text-sm text-gray-700">
                  {product.rating}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
                <div className="ml-1 flex items-center">
                  {[0, 1, 2, 3, 4].map(rating => (
                    <HiStar
                      key={rating}
                      aria-hidden="true"
                      className={cn(
                        product.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                    />
                  ))}
                </div>
                <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
                  ·
                </div>
                <div className="ml-4 flex">
                  <a href="#" className="text-sm font-medium text-[#fbd900] hover:text-[#eccc00]">
                    See all {product.reviewCount} reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Image Gallery */}
          <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 className="sr-only">Images</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              {product.images.map(image => (
                <img
                  key={image.id}
                  alt={image.imageAlt}
                  src={image.imageSrc}
                  className={cn(
                    image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                    'rounded-lg'
                  )}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 lg:col-span-5">
            <form>
              {/* Color Picker */}
              <div>
                <h2 className="text-sm font-medium text-gray-900">Color</h2>
                <fieldset aria-label="Choose a color" className="mt-2">
                  <RadioGroup
                    value={selectedColor}
                    onChange={handleColorChange}
                    className="flex items-center space-x-3"
                  >
                    {product.colors.map(color => (
                      <Radio
                        key={color.name}
                        value={color}
                        aria-label={color.name}
                        className={cn(
                          color.selectedColor,
                          'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none data-[checked]:ring-2 data-[focus]:data-[checked]:ring data-[focus]:data-[checked]:ring-offset-1'
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            color.bgColor,
                            'h-8 w-8 rounded-full border border-black border-opacity-10'
                          )}
                        />
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              {/* Size Picker */}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-gray-900">Size</h2>
                  <a href="#" className="text-sm font-medium text-[#fbd900] hover:text-[#eccc00]">
                    See sizing chart
                  </a>
                </div>
                <fieldset aria-label="Choose a size" className="mt-2">
                  <RadioGroup
                    value={selectedSize}
                    onChange={handleSizeChange}
                    className="grid grid-cols-3 gap-3 sm:grid-cols-6 select-none"
                  >
                    {product.sizes.map(size => (
                      <Radio
                        key={size.name}
                        value={size}
                        disabled={!size.inStock}
                        className={cn(
                          size.inStock
                            ? 'cursor-pointer focus:outline-none'
                            : 'cursor-not-allowed opacity-25',
                          'flex items-center justify-center rounded-md border border-gray-200 bg-white px-3 py-3 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 data-[checked]:border-transparent data-[checked]:bg-[#fbd900] data-[checked]:text-white data-[focus]:ring-2 data-[focus]:ring-[#eccc00] data-[focus]:ring-offset-2 data-[checked]:hover:bg-[#e5c600] sm:flex-1'
                        )}
                      >
                        <p className="select-none">{size.name}</p>
                      </Radio>
                    ))}
                  </RadioGroup>
                </fieldset>
              </div>
              {/* Add to Cart Button */}
              <button
                type="submit"
                className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-[#fbd900] px-8 py-3 text-base font-medium text-white hover:bg-[#e5c600] focus:outline-none focus:ring-2 focus:ring-[#eccc00] focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>
            {/* Product Description */}
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Description</h2>
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
                className="prose prose-sm mt-4 text-gray-500"
              />
            </div>
            {/* Fabric & Care */}
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>
              <div className="prose prose-sm mt-4 text-gray-500">
                <ul role="list">
                  {product.details.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Policies */}
            <section aria-labelledby="policies-heading" className="mt-10">
              <h2 id="policies-heading" className="sr-only">
                Our Policies
              </h2>
              <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {policies.map(policy => (
                  <div
                    key={policy.name}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center"
                  >
                    <dt>
                      <policy.icon
                        aria-hidden="true"
                        className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                      />
                      <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                    </dt>
                    <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;
