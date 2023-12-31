import React from 'react';
import { Popover, Text } from 'modules/_shared/ui';
import { useTranslation } from 'react-i18next';
import { useCompanyNavigation } from 'modules/company/blocks/company-navigation/hooks/use-company-navigation';
import CompanyIcon from 'assets/icons/organization.svg';
import styles from './company-navigation.module.css';

export const CompanyNavigation = () => {
  const { t } = useTranslation();
  const { isNavMenuOpen, handleOpenChange, onNavItemClick, navItems } =
    useCompanyNavigation();

  return (
    <Popover
      overlayInnerStyle={{ padding: '5px 0' }}
      destroyTooltipOnHide
      open={isNavMenuOpen}
      onOpenChange={handleOpenChange}
      placement='bottomRight'
      trigger='click'
      arrow={false}
      content={
        <div className={styles.navItemsWrapper}>
          {navItems.map((item) => (
            <div
              className={styles.navItem}
              key={item.key}
              onClick={() => onNavItemClick(item.key)}
            >
              {t(item.label)}
            </div>
          ))}
        </div>
      }
    >
      <div className={styles.openNavButton}>
        <CompanyIcon className={styles.icon} />
        <Text>{t('company.title')}</Text>
      </div>
    </Popover>
  );
};
