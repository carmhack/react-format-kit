# React Format Kit
A TypeScript-based React component for formatting various data types such as dates, numbers, currencies and units with support for multiple formats and localization. Powered by the native `Intl` API, this library simplifies the process of displaying localized data formats across your React applications.

Package: [Go to npm](https://www.npmjs.com/package/react-format-kit)

## Features

- 📅 **Date Formatting**: Supports multiple date formats (ISO, numeric, human-readable).
- 💰 **Number and Currency Formatting**: (TODO) Easily format numbers and currencies with localization support.
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

Here is an example of how to use the `FormatDate` component for formatting dates:


```tsx
import React from 'react';
import { FormattedDate } from 'react-intl-formatters';

const App = () => (
  <div>
    <h1>Date Formatting Examples</h1>
    
    {/* Human-readable format */}
    <FormatDate date={new Date()} format="human" locale="en-US" />

    {/* Numeric format */}
    <FormatDate date="2024-10-09T14:30:00Z" format="numeric" locale="en-GB" />

    {/* ISO format */}
    <FormatDate date="2024-10-09T14:30:00Z" format="iso" />
  </div>
);
```

### Props

The `FormatDate` component accepts the following props:

| Prop      | Type   | Default   | Description   |
|-----------|---------------|----------|------------|
| `date` | `Date` or `string` | `new Date()` | The date to format. It must be a string that Date.parse() can interpret or a Date object |
| `format` | `iso \ numeric \ human \ human-long` | `human`| The format to display the date: ISO format, numeric, human-readable, or long human-readable format. |
| `locale` | `string` | `'en-US'` | The locale to use for formatting the date (e.g., `'en-US'`, `'fr-FR'`).  |

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request on GitHub.

