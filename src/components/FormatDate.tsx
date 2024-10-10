import React from 'react';
import { getValidLocale } from '../utils/locale';

type FormatDateType = 'iso' | 'numeric' | 'human' | 'human-long';
type FormatDateProps = {
  date?: Date | string,
  format?: FormatDateType,
  locale?: string,
}

const getDateTimeFormatOptions = (format: string): Intl.DateTimeFormatOptions => {
  switch (format) {
    case 'numeric':
      return {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      };
    case 'human-long':
      return {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    case 'human':
      return {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      };
    default:
      return {};
  }
}

const FormatDate: React.FC<FormatDateProps> = ({
  date = new Date(),
  format = 'human',
  locale,
}) => {
  const parsedDate = typeof date === 'string' ? new Date(Date.parse(date)) : date;

  if (format === 'iso') {
    return <p>{parsedDate.toISOString()}</p>
  }

  const validLocale = getValidLocale(locale);
  const options = getDateTimeFormatOptions(format);

  return <time>{new Intl.DateTimeFormat(validLocale, options).format(parsedDate)}</time>
}

export default FormatDate;