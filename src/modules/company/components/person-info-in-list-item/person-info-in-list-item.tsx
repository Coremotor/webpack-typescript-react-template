import React, { FC } from 'react';
import { TextAvatar } from 'modules/_shared/components';
import { transformFullName } from 'modules/_shared/utils/text-transform';
import { Text } from 'modules/_shared/ui';
import styles from 'modules/company/components/person-info-in-list-item/person-info-in-list-item.module.css';

type TFullNameInRows = {
  fullName: string;
  description: string;
};

export const PersonInfoInListItem: FC<TFullNameInRows> = ({
  fullName,
  description,
}) => {
  return (
    <div className={styles.fullNameWrapper}>
      <TextAvatar str={transformFullName(fullName)} />
      <div className={styles.textWrapper}>
        <Text ellipsis>{fullName}</Text>
        <Text type='secondary' ellipsis>
          {description}
        </Text>
      </div>
    </div>
  );
};
