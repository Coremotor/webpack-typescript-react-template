import { Translation } from 'modules/_shared/i18n/types';

export const ru: { translation: Translation } = {
  translation: {
    registration: {
      title: 'Регистрация',
      link: 'Войти',
      isHaveAccount: 'Уже есть аккаунт?',
      emailInputLabel: 'Ваш email',
      passwordInputLabel: 'Ваш пароль',
      repeatPasswordInputLabel: 'Повторите пароль',
      placeholderPassword: 'Введите пароль',
      passwordNotMatch: 'Пароль, который вы ввели, не совпадает!',
      button: 'Продолжить',
    },
    authorization: {
      title: 'Вход в личный кабинет',
      link: 'Зарегистрироваться',
      isHaveAccount: 'Нет аккаунта?',
      emailInputLabel: 'Ваш email',
      passwordInputLabel: 'Ваш пароль',
      placeholderPassword: 'Введите пароль',
      forgotYourPassword: 'Забыли пароль?',
      button: 'Войти',
      TLButton: 'Войти через TravelLine',
    },
    emailConfirmation: {
      title: 'Подтвердите email',
      content: 'Мы отправили код подтверждения на',
      placeholderInputCode: 'Введите код подтверждения',
      conditions: 'Я принимаю условия',
      link: 'договора оферты',
      button: 'Продолжить',
      codeRequest: 'Запросить код повторно можно через',
      sendCode: 'Отправить код повторно',
    },
    navigation: {
      mainScreen: 'Главный экран',
      paymentTransactions: 'Платёжные операции',
      documentFlow: 'Документооборот',
      accountsContracts: 'Счета и договоры',
      accommodationFacilities: 'Объекты размещения',
      paymentMethods: 'Методы оплаты',
    },
    paymentMethods: {
      title: 'Методы оплаты',
      paymentMethodDescription: 'Лимит плательщика',
      buttonSave: 'Сохранить',
      buttonCancel: 'Отменить',
    },
    documentFlow: {
      title: 'Документооборот',
      docsTab: 'Бухгалтерские документы',
      registryTab: 'Реестр операций',
      actionBarText: 'Выбрано',
      printButton: 'Напечатать',
      downloadButton: 'Скачать',
      saveButton: 'Сохранить',
      cancelButton: 'Отменить',
      sendEmailButton: 'Запланировать отправку',
      acts: 'Акты',
      reports: 'Отчеты',
      invoices: 'Счета фактуры',
      registries: 'Реестры',
      loadMoreButton: 'Показать ещё',
      date: 'Дата',
      acquirer: 'Эквайер',
      consolidatedRegistries: 'Сводные реестры',
      dailyRegisters: 'Ежедневные реестры',
      modalTitle: 'Запланировать отправку на почту',
      dailyShedulerDescription: 'Период отправки: ежедневно',
      consolidateShedulerDescription:
        'Период отправки: в течение 7-ми рабочих дней следующего месяца',
      selectPlaceholder: 'Введите имя пользователя',
    },
  },
};
