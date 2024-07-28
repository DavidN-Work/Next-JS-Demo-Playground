/*
 * File: policies.data.ts
 * Project: demo-app
 * Created Date: Saturday, July 27th 2024, 6:13:56 pm
 * Author: David Ngo
 * -----
 * Last Modified: Sat Jul 27 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import { HiCurrencyDollar, HiGlobeAmericas } from 'react-icons/hi2';

const policies = [
  {
    name: 'International delivery',
    icon: HiGlobeAmericas,
    description: 'Get your order in 2 years',
  },
  { name: 'Loyalty rewards', icon: HiCurrencyDollar, description: "Don't look at other tees" },
];

export default policies;
