import React from 'react';
import { AuthRegLayout } from 'modules/_shared/layout';
import {
  EmailConfirmationCodeRequest,
  EmailConfirmationForm,
  EmailConfirmationHeader,
} from 'modules/email-confirmation/components';

const EmailConfirmation = () => {
  return (
    <AuthRegLayout>
      <EmailConfirmationHeader />
      <EmailConfirmationForm />
      <EmailConfirmationCodeRequest />
    </AuthRegLayout>
  );
};

export default EmailConfirmation;
