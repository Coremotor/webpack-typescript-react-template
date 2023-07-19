import React, { FC } from 'react';
import { Popover } from 'modules/_shared/ui';
import { CompanyEmployeesMenu } from 'modules/company/blocks/company-employees/components';
import { stopPropagationFn } from 'modules/_shared/helpers/stopPropagation';
import ThreeDotsIcon from 'assets/icons/three-dots.svg';

type TCompanyEmployeesMenuPopoverProps = {
  open: boolean;
  hide: () => void;
  showModal: () => void;
  handleOpenChange: (newOpen: boolean) => void;
};

export const CompanyEmployeesMenuPopover: FC<
  TCompanyEmployeesMenuPopoverProps
> = ({ hide, showModal, handleOpenChange, open }) => {
  return (
    <Popover
      destroyTooltipOnHide
      overlayInnerStyle={{ padding: '5px 0' }}
      placement='bottomRight'
      content={
        <CompanyEmployeesMenu
          hideMenu={hide}
          openDeleteEmployeeModal={showModal}
        />
      }
      trigger='click'
      arrow={false}
      open={open}
      onOpenChange={handleOpenChange}
    >
      <ThreeDotsIcon onClick={stopPropagationFn} />
    </Popover>
  );
};
