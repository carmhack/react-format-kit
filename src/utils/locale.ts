
export const getValidLocale = (locale: string): string => {
  const supportedLocales = Intl.DateTimeFormat.supportedLocalesOf([locale]);
  if (supportedLocales.length > 0){
    return locale;
  } else {
    return navigator.language || 'en-US';
  }
}