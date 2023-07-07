import React, { FC } from 'react';
import { TAcquirer } from 'modules/document-flow/types';
import AlfaIcon from 'assets/icons/alfa-bank.svg';
import MonetaIcon from 'assets/icons/moneta-ru.svg';

type TAccountingDocumentsIcon = {
  acquirer: TAcquirer;
};

export const AccountingDocumentsIcon: FC<TAccountingDocumentsIcon> = ({
  acquirer,
}) => {
  const Icon = () => {
    switch (acquirer) {
      case 'alfa':
        return <AlfaIcon />;
      case 'moneta':
        return <MonetaIcon />;
      default:
        return <div>Icon</div>;
    }
  };

  return <Icon />;
};
