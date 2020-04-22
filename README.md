[![npm](https://img.shields.io/npm/v/timeseries-sqlite2leveldb.svg)](https://www.npmjs.com/package/timeseries-sqlite2leveldb)
[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![minified size](https://badgen.net/bundlephobia/min/timeseries-sqlite2leveldb)](https://bundlephobia.com/result?p=timeseries-sqlite2leveldb)
[![downloads](http://img.shields.io/npm/dm/timeseries-sqlite2leveldb.svg?style=flat-square)](https://npmjs.org/package/timeseries-sqlite2leveldb)
[![GitHub Issues](https://img.shields.io/github/issues/arlac77/timeseries-sqlite2leveldb.svg?style=flat-square)](https://github.com/arlac77/timeseries-sqlite2leveldb/issues)
[![Build Status](https://travis-ci.com/arlac77/timeseries-sqlite2leveldb.svg?branch=master)](https://travis-ci.com/arlac77/timeseries-sqlite2leveldb)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/arlac77/timeseries-sqlite2leveldb.git)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Known Vulnerabilities](https://snyk.io/test/github/arlac77/timeseries-sqlite2leveldb/badge.svg)](https://snyk.io/test/github/arlac77/timeseries-sqlite2leveldb)
[![codecov.io](http://codecov.io/github/arlac77/timeseries-sqlite2leveldb/coverage.svg?branch=master)](http://codecov.io/github/arlac77/timeseries-sqlite2leveldb?branch=master)
[![Coverage Status](https://coveralls.io/repos/arlac77/timeseries-sqlite2leveldb/badge.svg)](https://coveralls.io/r/arlac77/timeseries-sqlite2leveldb)


# timeseries-sqlite2leveldb

migrate time series data from sqlite to leveldb

# API

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [sqlite2leveldb](#sqlite2leveldb)
    -   [Parameters](#parameters)

## sqlite2leveldb

Convert sqlite data into leveldb data

### Parameters

-   `sqldb` **Database** source sqlite database
-   `leveldb` **Levelup** destination level db

Returns **[Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;void>** A promise that resolves after all records have been inserted

# install

With [npm](http://npmjs.org) do:

```shell
npm install timeseries-sqlite2leveldb
```

# license

# BSD-2-Clause
