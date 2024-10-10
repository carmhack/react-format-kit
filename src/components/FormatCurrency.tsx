import React from 'react';
import { getValidLocale } from '../utils/locale';
import { getValidCurrency } from '../utils/currency';

type FormatCurrencyProps = {
  value: number,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number,
  currency?: string,
  locale?: string,
}

const FormatCurrency: React.FC<FormatCurrencyProps> = ({
  value,
  currency,
  minimumFractionDigits = 0,
  maximumFractionDigits = 0,
  locale,
}) => {
  const validLocale = getValidLocale(locale);
  const validCurrency = getValidCurrency(currency);
  const formatter = new Intl.NumberFormat(validLocale, {
    style: 'currency',
    currency: validCurrency,
    minimumFractionDigits,
    maximumFractionDigits,
  });

  return <span>{formatter.format(value)}</span>
}

export default FormatCurrency;