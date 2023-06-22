import React, { FC } from 'react';

interface Props {
  text: string;
}

const Test: FC<Props> = ({ text }) => {
  return (
    <div>
      <div>{text}</div>
    </div>
  );
};

export default Test;
