/*
 * File: fetchTodos.ts
 * Project: demo-app
 * Created Date: Monday, July 29th 2024, 7:31:30 am
 * Author: David Ngo
 * -----
 * Last Modified: Mon Jul 29 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import axios from 'axios';

const fetchTodos = async (page: number) => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      _page: page,
      _limit: 10,
    },
  });
  return {
    results: response.data,
    total: parseInt(response.headers['x-total-count'], 10),
  };
};

export default fetchTodos;
