
# Bee-fast

Bee-fast is an npm package designed for functional programming in JavaScript applications, providing a collection of utility functions for common tasks such as formatting date-time, checking for the existence of values, and checking if an object is empty.

One of the main features of Bee-fast is its focus on functional programming principles. The package is designed to be modular and composable, with each function designed to operate independently and produce predictable results. This makes it easy to incorporate Bee-fast into your functional programming workflow, allowing you to build robust and scalable applications with ease.

## Usage
1. formatDate()
```javascript
var date = require('s-date');

var myBirthday = new Date(1994, 10, 7);
date('{mm}/{dd}/{yyyy}', myBirthday); // '11/07/1994'
```
Example: For January 2, 2053 4:30pm + 45 seconds

| String template | Output example | Meaning             |
| --------------- | -------------- | ------------------- |
| `{yyyy}`        | 2053           | 4-digit year        |
| `{yy}`          | 53             | 2-digit year        |
| `{mm}`          | 01             | 2-digit month       |
| `{m}`           | 1              | unpadded month      |
| `{Month}`       | January        | month name          |
| `{Mo}`          | Jan            | month shortname     |
| `{d}`           | 2              | date                |
| `{ds}`          | 2nd            | date + suffix       |
| `{dd}`          | 02             | 2-digit date        |
| `{Weekday}`     | Thursday       | day of the week     |
| `{Day}`         | Thu            | day shortname       |
| `{Dy}`          | Th             | day shortername     |
| `{D}`           | T              | 1-char day name     |
| `{h24}`         | 16             | unpadded hours (24) |
| `{hh24}`        | 16             | hours (24)          |
| `{hh}`          | 04             | hours (12)          |
| `{h}`           | 4              | unpadded hours (12) |
| `{ampm}`        | pm             | am/pm               |
| `{AMPM}`        | PM             | AM/PM               |
| `{Minutes}`     | 30             | Minutes (padded)    |
| `{Seconds}`     | 45             | Seconds (padded)    |
## Authors

- [@justinNguyen97](https://github.com/hungnv1997)


## Badges


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

