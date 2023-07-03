import { Translations } from 'modules/_shared/i18n/types';

export const translations: Translations = {
  en: {
    translation: {
      registration: {
        title: 'Registration',
        link: 'Enter',
        isHaveAccount: 'Already have an account?',
        emailInputLabel: 'Your email',
        passwordInputLabel: 'Your password',
        repeatPasswordInputLabel: 'Repeat password',
        placeholderPassword: 'Enter password',
        passwordNotMatch: 'Password that you entered do not match!',
        button: 'Continue',
      },
      authorization: {
        title: 'Login to your personal account',
        link: 'Register',
        isHaveAccount: "Don't have an account?",
        emailInputLabel: 'Your email',
        passwordInputLabel: 'Your password',
        placeholderPassword: 'Enter password',
        forgotYourPassword: 'Forgot your password?',
        button: 'Enter',
        TLButton: 'Sign in with TravelLine',
      },
      navigation: {
        mainScreen: 'Main screen',
        paymentTransactions: 'Payment transactions',
        documentFlow: 'Document flow',
        accountsContracts: 'Accounts and contracts',
        accommodationFacilities: 'Accommodation facilities',
        paymentMethods: 'Payment methods',
      },
    },
  },
  ru: {
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
      navigation: {
        mainScreen: 'Главный экран',
        paymentTransactions: 'Платёжные операции',
        documentFlow: 'Документооборот',
        accountsContracts: 'Счета и договоры',
        accommodationFacilities: 'Объекты размещения',
        paymentMethods: 'Методы оплаты',
      },
    },
  },
};
