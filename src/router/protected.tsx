import React, { ReactNode } from 'react';
import type { FC } from 'react';

import { routes } from 'router/routes';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const Protected: FC<Props> = ({ children }) => {
  const auth = true;
  const location = useLocation();

  if (!auth) {
    return <Navigate to={routes.signIn} state={{ from: location }} replace />;
  }

  return children;
};

export default Protected;
