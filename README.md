# [@fav/prop.omit][repo-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Creates a new plain object and copys properties of a source object except specified.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.


## Install

To install from npm:

```sh
$ npm install --save @fav/prop.omit
```

***NOTE:*** *npm < 2.7.0 does not support scoped package, but even old version Node.js supports it. So when you use such older npm, you should download this package from [github.com][repo-url], and move it in `node_modules/@fav/prop.omit/` directory manually.*


## Usage

For Node.js:

```js
var omit = require('@fav/prop.omit');
omit({ a: 1, b: 2, c: 3 }, ['b']); // => { a: 1, c: 3 }
```

For Web browsers:

```js
<script src="fav.prop.omit.min.js"></script>
<script>
var omit = fav.prop.omit;
omit({ a: 1, b: 2, c: 3 }, ['b']); // => { a: 1, c: 3 }
</script>
```

## API

### <u>omit(src, omittedProps) : object</u>

Creates a new plain object and copies enumerable own properties (keys and symbols) of *src* object, but the properties which are included in *omittedProps* are omitted.

**Parameters:**

| Parameter      |  Type  | Description                                |
|:---------------|:------:|:-------------------------------------------|
| *src*          | object | A source object.                           |
| *omittedProps* | Array  | A property keys and symbols to be omitted. | 

**Returns:**

A plain object which is copied property keys and symbols of a source object.


## Checked                                                                      

### Node.js (4〜9)

| Platform  |   4    |   5    |   6    |   7    |   8    |   9    |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-prop.omit/
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/prop.omit
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-prop.omit.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-prop.omit
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-prop.omit?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-prop-omit
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-prop.omit/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-prop.omit?branch=master
