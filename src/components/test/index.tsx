import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { getIsLoading } from 'store/modules/app/selectors';

interface Props {
  text: string;
}

const Test: FC<Props> = ({ text }) => {
  const isLoading = useSelector(getIsLoading);
  return (
    <div>
      <div>{text}</div>
      <div>isLoading: {isLoading ? 'true' : 'false'}</div>
    </div>
  );
};

export default Test;
