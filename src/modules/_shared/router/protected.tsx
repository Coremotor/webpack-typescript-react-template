import React, { ReactNode } from 'react';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { Navigate, useLocation } from 'react-router-dom';
import type { FC } from 'react';

type Props = {
  children: ReactNode;
};

const Protected: FC<Props> = ({ children }) => {
  const auth = true;
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutesEnum.authorization}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default Protected;
