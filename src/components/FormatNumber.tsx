import React from 'react';
import { getValidLocale } from '../utils/locale';

type FormatCurrencyProps = {
  value: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
  locale?: string,
}

const FormatNumber: React.FC<FormatCurrencyProps> = ({
  value,
  minimumFractionDigits = 0,
  maximumFractionDigits = 0,
  locale,
}) => {
  const validLocale = getValidLocale(locale);
  const formatter = new Intl.NumberFormat(validLocale, {
    style: 'decimal',
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return <span>{formatter.format(value)}</span>
}

export default FormatNumber;