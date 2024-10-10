import React from 'react';

type FormatDateProps = {
  date?: Date | string,
  format?: 'iso' | 'numeric' | 'human' | 'human-long',
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
  locale = 'en-US'
}) => {
  const parsedDate = typeof date === 'string' ? new Date(Date.parse(date)) : date;

  if (format === 'iso') {
    return <p>{parsedDate.toISOString()}</p>
  }

  const validLocale = Intl.DateTimeFormat.supportedLocalesOf([locale]).length > 0 ? locale : 'en-US';
  const options = getDateTimeFormatOptions(format);

  return <time>{new Intl.DateTimeFormat(validLocale, options).format(parsedDate)}</time>
}

export default FormatDate;