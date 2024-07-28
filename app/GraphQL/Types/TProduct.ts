/*
 * File: TProduct.ts
 * Project: demo-app
 * Created Date: Monday, July 29th 2024, 8:39:38 am
 * Author: David Ngo
 * -----
 * Last Modified: Mon Jul 29 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

export type TProduct = {
  id: string;
  attributes: {
    name: string;
    description: {
      type: string;
      children: {
        text: string;
      }[];
    }[];
    price: number;
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    } | null;
  };
};

export type TProductsData = {
  products: {
    data: TProduct[];
  };
};
