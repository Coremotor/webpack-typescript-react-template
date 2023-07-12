import React from 'react';
import 'modules/_shared/components/loader/loader.css';
import { Spin } from 'modules/_shared/ui';

export const Loader = () => {
  return <Spin className='outlet-loader' size='large' />;
};
