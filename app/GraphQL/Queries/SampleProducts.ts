/*
 * File: SampleProducts.ts
 * Project: demo-app
 * Created Date: Monday, July 29th 2024, 8:24:20 am
 * Author: David Ngo
 * -----
 * Last Modified: Mon Jul 29 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      data {
        id
        attributes {
          name
          description
          price
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
