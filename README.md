# React Format Kit
A TypeScript-based React component for formatting various data types such as dates, numbers, currencies and units with support for multiple formats and localization. Powered by the native `Intl` API, this library simplifies the process of displaying localized data formats across your React applications.

Package: [Go to npm](https://www.npmjs.com/package/react-format-kit)

## Features

- 📅 **Date Formatting**: Supports multiple date formats (ISO, numeric, month, day, human-readable).
- 💰 **Number Formatting**: Easily format numbers, percentages and currencies.
- 📏 **Unit Formatting**: (TODO) Format units of measure such as meters, kilometers, and more.
- 🌍 **Localization**: Full locale support using the `Intl` API for internationalized applications.
- 🔧 **TypeScript**: Written in TypeScript with full type declarations, providing autocompletion and type safety.
- 📊 **Expandable**: Designed to be expanded with additional formatting components in the future.


## Installation
To install, simply run the following command:

```bash
npm i react-format-kit
```

## Examples
### Format Date

The `FormatDate` component returns a time tag with formatted date.  
The `date` prop must be a string that Date.parse() can interpret or a Date object.  
The `format` prop can be one of those values: iso, numeric, human or human-long.  
If `locale` is not passed, `navigator.language` is used or, if it is not specified, the 'en-US' locale is used.


```tsx
import React from 'react';
import { FormatDate } from 'react-format-kit';

const App = () => (
  <div>
    {/* Human-readable format: current date with current locale */}
    <FormatDate format="human" />

    {/* Numeric format: will render 10/09/1991 */}
    <FormatDate date="1991-10-09T10:00:00Z" format="numeric" locale="en-US" />

    {/* ISO format: will render "1991-10-09T10:00:00.000Z" */}
    <FormatDate date="1991-10-09T10:00:00Z" format="iso" />
  </div>
);
```

The `FormatDate` component accepts the following props:

| Prop      | Type   | Default   | Description   |
|-----------|---------------|----------|------------|
| `date` | `Date` or `string` | `new Date()` | The date to format. |
| `format` | `iso \ numeric \ month \ day \ human \ human-long` | `human`| The format to display the date. |
| `locale` | `string` | navigator.language OR `'en-US'` | The locale to use for formatting the date.  |

### Format Number

The `FormatNumber` component returns a span tag with formatted number.  
The `minimumFractionDigits` and `maximumFractionDigits` are set to default value of 0.  
If `locale` is not passed, `navigator.language` is used or, if it is not specified, the 'en-US' locale is used.


```tsx
import React from 'react';
import { FormatNumber } from 'react-format-kit';

const App = () => (
  <div>
    {/* Will render 10,000 */}
    <FormatNumber value={10000} locale='en-US' />

    {/* Will render 10.000 */}
    <FormatNumber value={10000} locale='it-IT' />

    {/* Will render 10.000,98 */}
    <FormatNumber value={10000.98} minimumFractionDigits={1} maximumFractionDigits={2} locale='it-IT' />
  </div>
);
```

The `FormatNumber` component accepts the following props:

| Prop      | Type   | Default   | Description   |
|-----------|---------------|----------|------------|
| `value` | `number` | required | The number to format. |
| `minimumFractionDigits` | `number` | 0 | The minimum fraction digits to display. |
| `maximumFractionDigits` | `number` | 0 | The maximum fraction digits to display. |
| `locale` | `string` | navigator.language OR `'en-US'` | The locale to use for formatting the date (e.g., `'en-US'`, `'fr-FR'`).  |

### Format Currency

The `FormatCurrency` component returns a span tag with formatted number.  
The `currency` will be to default USD if not specified. Must be a valid currency in ISO 4217 list.  
The `minimumFractionDigits` and `maximumFractionDigits` are set to default value of 0.  
If `locale` is not passed, `navigator.language` is used or, if it is not specified, the 'en-US' locale is used.


```tsx
import React from 'react';
import { FormatCurrency } from 'react-format-kit';

const App = () => (
  <div>
    {/* Will render €10,000 */}
    <FormatCurrency value={10000} currency='EUR' locale='en-US' />

    {/* Will render 10.000 € */}
    <FormatCurrency value={10000} currency='EUR' />
  </div>
);
```

The `FormatCurrency` component accepts the following props:

| Prop      | Type   | Default   | Description   |
|-----------|---------------|----------|------------|
| `value` | `number` | required | The number to format. |
| `currency` | `string` | USD | Currency |
| `minimumFractionDigits` | `number` | 0 | The minimum fraction digits to display. |
| `maximumFractionDigits` | `number` | 0 | The maximum fraction digits to display. |
| `locale` | `string` | navigator.language OR `'en-US'` | The locale to use for formatting the date (e.g., `'en-US'`, `'fr-FR'`).  |

### Format Percentage

The `FormatPercentage` component returns a span tag with formatted number.  
The `value` must be a number that needs to be multiplied by 100 (e.g. 0.75 instead of 75).  
The `minimumFractionDigits` and `maximumFractionDigits` are set to default value of 0.  
If `locale` is not passed, `navigator.language` is used or, if it is not specified, the 'en-US' locale is used.


```tsx
import React from 'react';
import { FormatPercentage } from 'react-format-kit';

const App = () => (
  <div>
    {/* Will render 2.275% */}
    <FormatPercentage value={22.75} />

    {/* Will render 2,275% */}
    <FormatPercentage value={22.75} locale='en-US' />
  </div>
);
```

The `FormatPercentage` component accepts the following props:

| Prop      | Type   | Default   | Description   |
|-----------|---------------|----------|------------|
| `value` | `number` | required | The number to format. |
| `minimumFractionDigits` | `number` | 0 | The minimum fraction digits to display. |
| `maximumFractionDigits` | `number` | 0 | The maximum fraction digits to display. |
| `locale` | `string` | navigator.language OR `'en-US'` | The locale to use for formatting the date (e.g., `'en-US'`, `'fr-FR'`).  |

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request on GitHub.

