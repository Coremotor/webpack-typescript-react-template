import { TEmployee } from 'modules/company/types';
import { availableObjectOptions } from 'modules/_shared/mock-data/company-data';
import { Text } from 'modules/_shared/ui';
import React from 'react';

export const convertActiveEmployeeInTableView = (activeEmployee: TEmployee) => [
  {
    label: 'companyEmployees.status',
    value: activeEmployee?.status.title + ' ' + activeEmployee?.status.value,
  },
  {
    label: 'Email',
    value: activeEmployee.email,
  },
  {
    label: 'companyEmployees.phone',
    value: activeEmployee.phone,
  },
  {
    label: 'companyEmployees.availableObjects',
    value: availableObjectOptions.map((obj) => (
      <Text key={obj.value}>{obj.label}; </Text>
    )),
  },
];
