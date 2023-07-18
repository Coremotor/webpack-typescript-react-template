import React from 'react';

export const stopPropagationFn = (
  event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
) => {
  event.stopPropagation();
};
