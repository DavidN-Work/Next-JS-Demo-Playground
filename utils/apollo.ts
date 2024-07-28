/*
 * File: apollo.ts
 * Project: demo-app
 * Created Date: Monday, July 29th 2024, 8:20:06 am
 * Author: David Ngo
 * -----
 * Last Modified: Mon Jul 29 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://reassuring-hug-05b84b5db1.strapiapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
