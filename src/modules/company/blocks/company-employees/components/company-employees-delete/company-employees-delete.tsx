import React, { FC } from 'react';
import { TEmployee } from 'modules/company/types';

type TCompanyEmployeesDeleteProps = {
  employee: TEmployee;
};

export const CompanyEmployeesDelete: FC<TCompanyEmployeesDeleteProps> = ({
  employee,
}) => {
  return <div>{employee.fullName}</div>;
};
