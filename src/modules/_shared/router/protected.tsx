import React, { ReactNode } from 'react';
import { RoutesEnum } from 'modules/_shared/router/routes';
import { Navigate, useLocation } from 'react-router-dom';
import type { FC } from 'react';
import { getIsAuth } from 'modules/authorization/store/selectors';
import { useAppSelector } from 'modules/_shared/root-store/hooks';

type TProtectedProps = {
  children: ReactNode;
};

const Protected: FC<TProtectedProps> = ({ children }) => {
  const auth = useAppSelector(getIsAuth);
  const location = useLocation();

  if (!auth) {
    return (
      <Navigate
        to={RoutesEnum.Authorization}
        state={{ from: location }}
        replace
      />
    );
  }

  return children;
};

export default Protected;
