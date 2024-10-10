
export const getValidLocale = (locale: string | undefined): string => {
  if (!locale) {
    return navigator.language || 'en-US';
  }
  const supportedLocales = Intl.DateTimeFormat.supportedLocalesOf([locale]);
  if (supportedLocales.length > 0){
    return locale;
  } else {
    return navigator.language || 'en-US';
  }
}