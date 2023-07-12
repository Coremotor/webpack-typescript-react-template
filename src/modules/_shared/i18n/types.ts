export type Translation = {
  registration: {
    title: string;
    link: string;
    isHaveAccount: string;
    emailInputLabel: string;
    passwordInputLabel: string;
    repeatPasswordInputLabel: string;
    placeholderPassword: string;
    passwordNotMatch: string;
    button: string;
  };
  authorization: {
    title: string;
    link: string;
    isHaveAccount: string;
    emailInputLabel: string;
    passwordInputLabel: string;
    placeholderPassword: string;
    forgotYourPassword: string;
    button: string;
    TLButton: string;
  };
  emailConfirmation: {
    title: string;
    content: string;
    placeholderInputCode: string;
    conditions: string;
    link: string;
    button: string;
    codeRequest: string;
    sendCode: string;
  };
  navigation: {
    mainScreen: string;
    paymentTransactions: string;
    documentFlow: string;
    accountsContracts: string;
    accommodationFacilities: string;
    paymentMethods: string;
  };
  paymentMethods: {
    title: string;
    paymentMethodDescription: string;
    buttonSave: string;
    buttonCancel: string;
  };
  documentFlow: {
    title: string;
    docsTab: string;
    registryTab: string;
    actionBarText: string;
    printButton: string;
    downloadButton: string;
    saveButton: string;
    cancelButton: string;
    sendEmailButton: string;
    archiveRegistersButton: string;
    acts: string;
    reports: string;
    invoices: string;
    registries: string;
    loadMoreButton: string;
    date: string;
    acquirer: string;
    consolidatedRegistries: string;
    dailyRegisters: string;
    modalTitle: string;
    dailyShedulerDescription: string;
    consolidateShedulerDescription: string;
    selectPlaceholder: string;
  };
};

export type Translations = {
  en: {
    translation: Translation;
  };
  ru: {
    translation: Translation;
  };
};
