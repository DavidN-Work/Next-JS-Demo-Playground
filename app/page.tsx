/*
 * File: page.tsx
 * Project: demo-app
 * Created Date: Friday, July 26th 2024, 7:46:15 pm
 * Author: David Ngo
 * -----
 * Last Modified: Fri Jul 26 2024
 * Modified By: David Ngo
 * -----
 * Copyright (c) 2024 Kizio Technologies PTY LTD
 * -----
 */

import React from 'react';
import DetailedRouteSelector from './Components/RouteSelector/DetailedRouteSelector';
import StatesDemo from './Components/Grid/StatesDemo';
import EffectDemo from './Components/Grid/EffectDemo';
import MemoDemo from './Components/Grid/MemoDemo';
import RefDemo from './Components/Grid/RefDemo';
import routeSelectorSample from './Components/RouteSelector/Data/routeSelectorSample.data';

const Page = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 overflow-y-auto">
      <div className="space-y-8 w-full h-full">
        <div className="grid lg:grid-cols-4 gap-x-4">
          <StatesDemo />
          <EffectDemo />
          <MemoDemo />
          <RefDemo />
        </div>
        <DetailedRouteSelector
          title="Feature Set and Technology Demo"
          desc="A quick overview of the features and technologies used in this demo."
          items={routeSelectorSample}
        />
      </div>
    </div>
  );
};

export default Page;
