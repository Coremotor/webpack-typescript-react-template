import React from 'react';

export const stopPropagationFn = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
) => {
  event.stopPropagation();
};
