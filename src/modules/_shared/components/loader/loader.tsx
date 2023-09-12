import React from 'react';
import { Spin } from 'modules/_shared/ui';
import './loader.css';

export const Loader = () => {
  return <Spin className='outlet-loader' size='large' />;
};
