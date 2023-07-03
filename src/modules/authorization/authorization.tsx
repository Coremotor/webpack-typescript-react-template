import React from 'react';
import { AuthRegLayout } from 'modules/_shared/layout';
import {
  AuthorizationForm,
  AuthorizationHeader,
  SignInWithTravelline,
} from 'modules/authorization/components';

const Authorization = () => {
  return (
    <AuthRegLayout>
      <AuthorizationHeader />
      <AuthorizationForm />
      <SignInWithTravelline />
    </AuthRegLayout>
  );
};
export default Authorization;
