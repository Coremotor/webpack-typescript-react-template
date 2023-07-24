import React from 'react';
import {
  RegistrationForm,
  RegistrationHeader,
} from 'modules/registration/components';
import { AuthRegLayout } from 'modules/_shared/layouts';

export const Registration = () => {
  return (
    <AuthRegLayout>
      <RegistrationHeader />
      <RegistrationForm />
    </AuthRegLayout>
  );
};

export default Registration;
