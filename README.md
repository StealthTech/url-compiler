# URL Compiler

This library allows you to compile composite URLs from templates.

* No runtime dependencies
* Has typings for TypeScript

## Installation

Install and add to your project dependencies.

`npm install --save url-compiler`

## Usage

This packages contains four functions:
* `compileUrl` — compile url from template with params (also query, hash, trailing slash)
* `renderUrl` — render url from template with context (used in `compileUrl`)
* `handleTrailingSlash` — add or remove trailing slash (used in `compileUrl`)
* `queryString` — generate query-like string from object (used in `compileUrl`)

### Example: compileUrl
```js
import {compileUrl} from 'url-compiler';

const template = 'https://NPMJS.com/package/{package}';

// All params are optional
const params = {
    query: {
        foo: 'bar',
    },
    context: {
        package: 'url-compiler',
    },
    hash: 'usage',
    lowerCase: true,
    trailingSlash: true,
}
const url = compileUrl(template);

// https://npmjs.com/packages/url-compiler/#usage?foo=bar
console.log(url);
```

### Example: renderUrl
```js
import {renderUrl} from 'url-compiler';

const template = 'https://npmjs.com/package/{package}/';
const context = {
    package: 'url-compiler',
};

const url = renderUrl(template, context);

// https://npmjs.com/packages/url-compiler/
console.log(url);
```

### Example: handleTrailingSlash
```js
import {handleTrailingSlash} from 'url-compiler';

// --- If we want to remove trailing slash ---
const urlWithSlash = 'https://npmjs.com/';
const resultUrlWithSlash = handleTrailingSlash(urlWithSlash, false);

// https://npmjs.com (note that trailing slash is not present)
console.log(resultUrlWithSlash);

// --- If we want to add trailing slash ---
const urlWithoutSlash = 'https://npmjs.com';
const resultUrlWithoutSlash = handleTrailingSlash(urlWithSlash, true);

// https://npmjs.com/ (note that trailing slash is present)
console.log(resultUrlWithSlash);
```

### Example: queryString
```js
import {queryString} from 'url-compiler';

const query = {
    a: 'b',
    foo: 'bar',
}
const result = queryString(query);

// ?a=b&foo=bar
console.log(result);
```
